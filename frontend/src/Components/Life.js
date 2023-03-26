import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Life.css";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineEdit,
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiOutlineDelete,
  AiOutlineClose,
} from "react-icons/ai";

const Life = () => {
  // Priority 0 - URGENT/ASAP
  // Priority 1 - NOT URGENT but important
  // Priority 2 - Whenever possible

  // Price in LEI

  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  const [isEditable, setIsEditable] = useState();

  const [objectsNeeded, setObjectsNeeded] = useState([
    {
      priority: 1,
      name: "Training Shirt",
      quantity: 10,
      price: 6,
      link: "https://depozituldetricouri.ro/adult-lightweight-tank_i50.html?color=Heather%20Green%2FHeather%20Grey&size=S",
      dateNeeded: new Date(2023, 4, 20),
    },
    {
      priority: 1,
      name: "Training Pants",
      quantity: 7,
      price: 0,
      link: 0,
      dateNeeded: new Date(2023, 4, 20),
    },
    {
      priority: 2,
      name: "Sweater",
      quantity: 3,
      price: 9,
      link: "https://depozituldetricouri.ro/adult-heavyweight-long-sleeve-hooded-tee_i847.html?color=Seafoam&size=2XL",
      dateNeeded: new Date(2023, 4, 20),
    },
    {
      priority: 2,
      name: "Bath Towel",
      quantity: 2,
      price: 65,
      link: "https://depozituldetricouri.ro/olima-basic-towel_i571.html?color=White&size=30X50",
      dateNeeded: new Date(2023, 4, 20),
    },
    {
      priority: 2,
      name: "All purpose towel",
      quantity: 3,
      price: 7,
      link: "https://depozituldetricouri.ro/olima-basic-towel_i571.html",
      dateNeeded: new Date(2023, 4, 20),
    },
    {
      priority: 2,
      name: "Training Bag",
      quantity: 1,
      price: 0,
      link: 0,
      dateNeeded: new Date(2023, 4, 20),
    },
    {
      priority: 0,
      name: "Trimmer",
      quantity: 1,
      price: 0,
      link: 0,
      dateNeeded: new Date(2023, 4, 20),
    },
    {
      priority: 2,
      name: "Water Bottle",
      quantity: 1,
      price: 0,
      link: 0,
      dateNeeded: new Date(2023, 4, 20),
    },
    {
      priority: 0,
      name: "Skipping Cord",
      quantity: 1,
      price: 23,
      link: "https://www.fightshop.ro/corzi-pentru-sarit/coarda-ajustabila-armura-2-85-metrii.html",
      dateNeeded: new Date(2023, 4, 20),
    },
    {
      priority: 0,
      name: "Muay Thai Leg pad",
      quantity: 1,
      price: 0,
      link: 0,
      dateNeeded: new Date(2023, 4, 20),
    },
    {
      priority: 0,
      name: "Defumoxan",
      quantity: 1,
      price: 125,
      link: 0,
      dateNeeded: new Date(2023, 4, 1),
    },
  ]);

  const [objectsOrdered, setObjectsOrdered] = useState(null);

  useEffect(() => {
    if (objectsNeeded && objectsNeeded.length > 0) {
      var prioZeroArray = [];
      var prioOneArray = [];
      var prioTwoArray = [];

      var totalDummy = 0;

      objectsNeeded.map((object, i) => {
        if (object.priority === 0) {
          prioZeroArray.push(object);
        } else if (object.priority === 1) {
          prioOneArray.push(object);
        } else if (object.priority === 2) {
          prioTwoArray.push(object);
        }
        totalDummy += object.price !== 0 ? object.price * object.quantity : 0;
      });
      setObjectsOrdered([...prioZeroArray, ...prioOneArray, ...prioTwoArray]);
      setTotal(totalDummy);
    }
  }, [objectsNeeded]);

  const return_Date = (dateNeeded) => {
    if (dateNeeded === 0 || !dateNeeded) return "???";
    var return_str = "";
    if (dateNeeded.getDate() < 10) {
      return_str += "0" + dateNeeded.getDate() + "/";
    } else {
      return_str += dateNeeded.getDate() + "/";
    }
    if (dateNeeded.getMonth() < 10) {
      return_str += "0" + dateNeeded.getMonth() + "/";
    } else {
      return_str += dateNeeded.getMonth() + "/";
    }
    return return_str + dateNeeded.getFullYear();
  };

  const handleEdit = (idx) => {
    if (!isEditable || idx !== isEditable[1]) {
      setIsEditable([true, idx]);
    } else if (idx === isEditable[1]) {
      setIsEditable([!isEditable[0], idx]);
    }
  };

  const handleCheck = (idx) => {

  }

  const handleDone = (idx) => {}
  const handleDelete = (idx) => {}

  return (
    <div className="LifeWrapper MainPage">
      <div className="LifeObjectsNeeded">
        <div className="LifeObjectsTitle">To Buy</div>
        <div className="LifeObjectsExplained">
          <div className="LifeObjectsExplainedLeft">
            <span>Priority 0</span>
            <span>Priority 1</span>
            <span>Priority 2</span>
          </div>
          <div className="LifeObjectsExplainedRight">
            <div id="LifeObjectsExplainedBoxRed"></div>
            <div id="LifeObjectsExplainedBoxBlue"></div>
            <div id="LifeObjectsExplainedBoxGreen"></div>
          </div>
        </div>
        {objectsOrdered && objectsOrdered.length
          ? objectsOrdered.map((object, i) => {
              return (
                <div
                  className={`LifeObjectNeeded ${
                    object.priority === 0 ? "LifeObjectNeededPrioZero" : ""
                  } ${object.priority === 1 ? "LifeObjectNeededPrioOne" : ""} ${
                    object.priority === 2 ? "LifeObjectNeededPrioTwo" : ""
                  }`}
                  key={i}
                >
                  <div id="LifeObjectEdit" onClick={() => handleEdit(i)}>
                    {isEditable && isEditable[0] && isEditable[1] === i ? (
                      <AiOutlineClose />
                    ) : (
                      <AiOutlineEdit />
                    )}
                  </div>
                  {isEditable && isEditable[0] && isEditable[1] === i ? (
                    <>
                      <div id="LifeObjectCheck" onClick={() => handleCheck(i)}>
                        <AiOutlineCheck />
                      </div>
                      <div id="LifeObjectCheckCircle" onClick={() => handleDone(i)}>
                        <AiOutlineCheckCircle />
                      </div>
                      <div id="LifeObjectDelete" onClick={() => handleDelete(i)}>
                        <AiOutlineDelete />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="LifeObjectDescriptionLeft">
                    <span>Name:</span>
                    <span>Quantity:</span>
                    <span>Price:</span>
                    <span>Date Needed:</span>
                    <span>Link:</span>
                  </div>
                  <div className="LifeObjectDescriptionRight">
                    {isEditable && isEditable[0] && isEditable[1] === i ? (
                      <>
                        <input defaultValue={object.name}></input>
                        <input
                          defaultValue={
                            object.quantity === 0 ? "" : object.quantity
                          }
                        ></input>
                        <input
                          defaultValue={object.price === 0 ? "" : object.price}
                        ></input>
                        <input
                          defaultValue={return_Date(object.dateNeeded)}
                        ></input>
                        <input
                          defaultValue={object.link === 0 ? "" : object.link}
                        ></input>
                      </>
                    ) : (
                      <>
                        <span>{object.name}</span>
                        <span>
                          {object.quantity === 0 ? "???" : object.quantity}
                        </span>
                        <span>{object.price === 0 ? "???" : object.price}</span>
                        <span>{return_Date(object.dateNeeded)}</span>
                        <span>
                          <Link
                            to={object.link === 0 ? "#" : object.link}
                            target={object.link === 0 ? "_self" : "_blank"}
                          >
                            {object.link === 0 ? "???" : object.link}
                          </Link>
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })
          : ""}
        <div className="LifeObjectsNeededTotal">Total: {total} LEI</div>
      </div>
    </div>
  );
};

export default Life;
