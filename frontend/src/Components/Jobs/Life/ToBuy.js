import { useEffect, useState } from "react";
import {
  AiOutlineEdit,
  AiOutlineCheckCircle,
  AiOutlineDelete,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import "../../../Styles/Jobs/Life/ToBuy.css";
import { useMutation } from "@apollo/client";
import { addTask, deleteTask, editTask } from "../../../Apollo/Mutations/Tasks";
import checkRegexToBuy from "../../../Logic/ToBuy";
import { reverse_Date } from "../../../Logic/Date";

const ToBuy = ({
  object,
  handleEdit,
  isEditable,
  return_Date,
  setHasChangedObject,
  setObjectsOrdered,
  objectsOrdered,
}) => {
  const [isIncorrectValue, setIsIncorrectValue] = useState();
  const [incorrectMessage, setIncorrectMessage] = useState();

  const [clickedDone, setClickedDone] = useState(false);
  const [clickedDelete, setClickedDelete] = useState(false);

  const [addTaskMutation, { dataAdd, loadingAdd, errorAdd }] =
    useMutation(addTask);
  const [editTaskMutation, { data, loading, error }] = useMutation(editTask);
  const [deleteTaskMutation, { dataDelete, loadingDelete, errorDelete }] =
    useMutation(deleteTask);

  const [priorityValue, setPriorityValue] = useState(object.priority);
  const [nameValue, setNameValue] = useState(object.name);
  const [quantityValue, setQuantityValue] = useState(object.quantity);
  const [priceValue, setPriceValue] = useState(object.price);
  const [linkValue, setLinkValue] = useState(object.link);
  const [dateNeededValue, setDateNeededValue] = useState(object.dateNeeded);
  const [deliveryPriceValue, setDeliveryPriceValue] = useState(
    object.deliveryPrice
  );

  useEffect(() => {
    var timeoutVar;
    try {
      setIsIncorrectValue("");
      if (clickedDone) {
        const priorityInt = parseInt(priorityValue);
        const quantityInt = parseInt(quantityValue);
        const priceInt = parseInt(priceValue);
        const deliveryPriceInt = parseInt(deliveryPriceValue);
        const regexResult = checkRegexToBuy(
          priorityInt,
          nameValue,
          quantityInt,
          priceInt,
          dateNeededValue,
          linkValue,
          deliveryPriceInt
        );
        const dateProperlyFormatted = reverse_Date(dateNeededValue);
        if (regexResult === true && dateProperlyFormatted !== false) {
          if (!object._id) {
            addTaskMutation({
              variables: {
                priority: priorityInt,
                name: nameValue,
                quantity: quantityInt,
                price: priceInt,
                dateNeeded: dateProperlyFormatted,
                link: linkValue,
                deliveryPrice: deliveryPriceInt,
              },
            }).then((res) => {
              if (res.data) {
                handleEdit(res.data._id);
                setHasChangedObject(true);
              }
            });
          } else {
            editTaskMutation({
              variables: {
                _id: object._id,
                priority: priorityInt,
                name: nameValue,
                quantity: quantityInt,
                price: priceInt,
                dateNeeded: dateProperlyFormatted,
                link: linkValue,
                deliveryPrice: deliveryPriceInt,
              },
            });
          }
          setClickedDone(false);
        } else {
          setIsIncorrectValue(regexResult[0]);
          setIncorrectMessage(regexResult[1]);
          timeoutVar = setTimeout(() => {
            setIsIncorrectValue("");
            setClickedDone(false);
          }, 3000);
        }
      }
    } catch (err) {
      setIsIncorrectValue("try-catch");
      setIncorrectMessage(
        "Please ensure you provide digits when digits are asked."
      );
      timeoutVar = setTimeout(() => {
        setIsIncorrectValue("");
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutVar);
    };
  }, [clickedDone]);

  useEffect(() => {
    if (clickedDelete) {
      if (object.notYetAdded) {
        setObjectsOrdered([
          ...objectsOrdered.filter((object, _) => {
            if (object._id !== undefined) {
              return object;
            }
          }),
        ]);
      } else {
        deleteTaskMutation({
          variables: {
            _id: object._id,
          },
        }).then((res) => {
          if (res.data) {
            handleEdit(object._id);
            setHasChangedObject(true);
          }
        });
        setClickedDelete(false);
      }
    }
  }, [clickedDelete]);

  useEffect(() => {
    if (data) {
      handleEdit(object._id);
      setHasChangedObject(true);
    }
  }, [data]);

  const handleEditInside = (_id) => {
    setPriorityValue(object.priority);
    setNameValue(object.name);
    setQuantityValue(object.quantity);
    setPriceValue(object.price);
    setLinkValue(object.link);
    setDateNeededValue(return_Date(object.dateNeeded));
    setDeliveryPriceValue(object.deliveryPrice);
    handleEdit(_id);
  };

  // Error handling

  useEffect(() => {
    var timeoutVar;
    if (error || errorAdd || errorDelete) {
      setIsIncorrectValue("error");
      if (error) {
        setIncorrectMessage("There was a problem editing your To Buy.");
      } else if (errorAdd) {
        setIncorrectMessage("There was a problem adding a To Buy.");
      } else if (errorDelete) {
        setIncorrectMessage("There was a problem deleting your To Buy.");
      }
      timeoutVar = setTimeout(() => {
        setIsIncorrectValue("");
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutVar);
    };
  }, [error, errorAdd, errorDelete]);

  return (
    <div
      className={`ToBuy ${
        object.priority === 0
          ? "ToBuyPrioZero"
          : object.priority === 1
          ? "ToBuyPrioOne"
          : object.priority === 2
          ? "ToBuyPrioTwo"
          : ""
      }`}
    >
      <div
        id="ToBuyWarn"
        className={` ${isIncorrectValue ? "ToBuyWarnShow" : ""}`}
      >
        {incorrectMessage}
      </div>
      <div id="ToBuyEdit" onClick={() => handleEditInside(object._id)}>
        {isEditable && isEditable[0] && isEditable[1] === object._id ? (
          <AiOutlineClose />
        ) : (
          <AiOutlineEdit />
        )}
      </div>
      {isEditable && isEditable[0] && isEditable[1] === object._id ? (
        <>
          <div id="ToBuyCheckCircle" onClick={() => setClickedDone(true)}>
            <AiOutlineCheckCircle />
          </div>
          <div id="ToBuyDelete" onClick={() => setClickedDelete(true)}>
            <AiOutlineDelete />
          </div>
        </>
      ) : (
        ""
      )}
      <div className="ToBuyDescriptionLeft">
        <span>Name:</span>
        <span>Quantity:</span>
        <span>Price:</span>
        <span>Date Needed:</span>
        <span>Link:</span>
        <span>Priority:</span>
        <span>Delivery Price:</span>
      </div>
      <div className="ToBuyDescriptionRight">
        {isEditable && isEditable[0] && isEditable[1] === object._id ? (
          <>
            <input
              className={`${
                isIncorrectValue === "name" ? "ToBuyInvalidValue" : ""
              }`}
              value={nameValue ? nameValue : ""}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder={"T-Shirt"}
            ></input>
            <input
              className={`${
                isIncorrectValue === "quantity" ? "ToBuyInvalidValue" : ""
              }`}
              value={quantityValue ? quantityValue : ""}
              onChange={(e) => setQuantityValue(e.target.value)}
              placeholder={"5"}
            ></input>
            <input
              className={`${
                isIncorrectValue === "price" ? "ToBuyInvalidValue" : ""
              }`}
              value={priceValue ? priceValue : ""}
              onChange={(e) => setPriceValue(e.target.value)}
              placeholder={"300"}
            ></input>
            <input
              className={`${
                isIncorrectValue === "dateNeeded" ? "ToBuyInvalidValue" : ""
              }`}
              value={dateNeededValue ? dateNeededValue : ""}
              onChange={(e) => setDateNeededValue(e.target.value)}
              placeholder={"20/04/2023"}
            ></input>
            <input
              className={`${
                isIncorrectValue === "link" ? "ToBuyInvalidValue" : ""
              }`}
              value={linkValue ? linkValue : ""}
              onChange={(e) => setLinkValue(e.target.value)}
              placeholder={"https://google.com"}
            ></input>
            <input
              className={`${
                isIncorrectValue === "priority" ? "ToBuyInvalidValue" : ""
              }`}
              value={priorityValue ? priorityValue : ""}
              onChange={(e) => setPriorityValue(e.target.value)}
              placeholder={0}
            ></input>
            <input
              className={`${
                isIncorrectValue === "deliveryPrice" ? "ToBuyInvalidValue" : ""
              }`}
              value={deliveryPriceValue ? deliveryPriceValue : ""}
              onChange={(e) => setDeliveryPriceValue(e.target.value)}
              placeholder={0}
            ></input>
          </>
        ) : (
          <>
            <span>{object.name}</span>
            <span>{object.quantity === 0 ? "???" : object.quantity}</span>
            <span>{object.price === 0 ? "???" : object.price}</span>
            <span>{return_Date(object.dateNeeded)}</span>
            <span>
              <Link
                to={object.link === 0 ? "#" : object.link}
                target={object.link === 0 ? "_self" : "_blank"}
              >
                {object.link === "https://google.com" ? "???" : object.link}
              </Link>
            </span>
            <span>{object.priority}</span>
            <span>
              {object.deliveryPrice === 0 ? "???" : object.deliveryPrice}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ToBuy;
