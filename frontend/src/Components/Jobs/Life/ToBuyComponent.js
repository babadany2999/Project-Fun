import { getTasks } from "../../../Apollo/Queries/Tasks";
import "../../../Styles/Jobs/Life/ToBuyComponent.css";
import ToBuy from "./ToBuy";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import client from "../../../Apollo/index";
import { return_Date } from "../../../Logic/Date";

const ToBuyComponent = () => {
  // Query and Mutations
  const { error, loading, data } = useQuery(getTasks, {});

  //
  const [objectsNeeded, setObjectsNeeded] = useState();

  //
  useEffect(() => {
    if (data) {
      const { getTasks } = data;
      if (getTasks) {
        var dummy_arr = [];
        for (let i = 0; i < getTasks.length; i++) {
          dummy_arr.push({
            _id: getTasks[i]._id,
            priority: getTasks[i].priority,
            name: getTasks[i].name,
            quantity: getTasks[i].quantity,
            price: getTasks[i].price,
            link: getTasks[i].link,
            dateNeeded: new Date(parseInt(getTasks[i].dateNeeded)),
            deliveryPrice: getTasks[i].deliveryPrice,
          });
        }
        setObjectsNeeded(dummy_arr);
      }
    }
  }, [data]);
  const [total, setTotal] = useState(0);
  const [prioZeroTotal, setPrioZeroTotal] = useState(0);
  const [prioOneTotal, setPrioOneTotal] = useState(0);
  const [prioTwoTotal, setPrioTwoTotal] = useState(0);

  const [totalDelivery, setTotalDelivery] = useState(0);
  const [prioZeroTotalDelivery, setPrioZeroTotalDelivery] = useState(0);
  const [prioOneTotalDelivery, setPrioOneTotalDelivery] = useState(0);
  const [prioTwoTotalDelivery, setPrioTwoTotalDelivery] = useState(0);

  const [isEditable, setIsEditable] = useState();

  const [objectsOrdered, setObjectsOrdered] = useState(null);

  const [hasChangedObject, setHasChangedObject] = useState(0);

  useEffect(() => {
    if (objectsNeeded) {
      var prioZeroArray = [];
      var prioOneArray = [];
      var prioTwoArray = [];

      var totalDummy = 0;
      var totalZeroDummy = 0;
      var totalOneDummy = 0;
      var totalTwoDummy = 0;

      var totalDeliveryDummy = 0;
      var totalDeliveryZeroDummy = 0;
      var totalDeliveryOneDummy = 0;
      var totalDeliveryTwoDummy = 0;

      objectsNeeded.map((object, i) => {
        if (object.priority === 0) {
          prioZeroArray.push(object);
          totalZeroDummy +=
            object.price !== 0 ? object.price * object.quantity : 0;
          totalDeliveryZeroDummy +=
            object.deliveryPrice !== 0 ? object.deliveryPrice : 0;
        } else if (object.priority === 1) {
          prioOneArray.push(object);
          totalOneDummy +=
            object.price !== 0 ? object.price * object.quantity : 0;
          totalDeliveryOneDummy +=
            object.deliveryPrice !== 0 ? object.deliveryPrice : 0;
        } else if (object.priority === 2) {
          prioTwoArray.push(object);
          totalTwoDummy +=
            object.price !== 0 ? object.price * object.quantity : 0;
          totalDeliveryTwoDummy +=
            object.deliveryPrice !== 0 ? object.deliveryPrice : 0;
        }
        totalDummy += object.price !== 0 ? object.price * object.quantity : 0;
        totalDeliveryDummy += object.deliveryPrice ? object.deliveryPrice : 0;
      });
      setObjectsOrdered([...prioZeroArray, ...prioOneArray, ...prioTwoArray]);
      setTotal(totalDummy);
      setPrioZeroTotal(totalZeroDummy);
      setPrioOneTotal(totalOneDummy);
      setPrioTwoTotal(totalTwoDummy);

      setTotalDelivery(totalDeliveryDummy);
      setPrioZeroTotalDelivery(totalDeliveryZeroDummy);
      setPrioOneTotalDelivery(totalDeliveryOneDummy);
      setPrioTwoTotalDelivery(totalDeliveryTwoDummy);
    }
  }, [objectsNeeded]);

  useEffect(() => {
    if (hasChangedObject === true) {
      setHasChangedObject(false);
      client.refetchQueries({
        include: [getTasks],
      });
    }
  }, [hasChangedObject]);

  const handleEdit = (idx) => {
    if (!isEditable || idx !== isEditable[1]) {
      setIsEditable([true, idx]);
    } else if (idx === isEditable[1]) {
      setIsEditable([!isEditable[0], idx]);
    }
  };

  const handleAddToBuy = () => {
    if (
      objectsOrdered.length > 0 &&
      !objectsOrdered[objectsOrdered.length - 1].notYetAdded
    ) {
      setObjectsOrdered([
        ...objectsOrdered,
        {
          priority: 0,
          notYetAdded: true,
        },
      ]);
      setIsEditable([true, undefined]);
    } else if (objectsOrdered.length === 0) {
      setObjectsOrdered([
        {
          priority: 0,
          notYetAdded: true,
        },
      ]);
      setIsEditable([true, undefined]);
    }
  };

  return (
    <div className="ToBuyComponent">
      <div className="ToBuyComponentTitle">To Buy</div>
      <div className="ToBuyComponentExplained">
        <div className="ToBuyComponentExplainedLeft">
          <span>Priority 0</span>
          <span>Priority 1</span>
          <span>Priority 2</span>
        </div>
        <div className="ToBuyComponentExplainedRight">
          <div id="ToBuyComponentExplainedBoxRed"></div>
          <div id="ToBuyComponentExplainedBoxBlue"></div>
          <div id="ToBuyComponentExplainedBoxGreen"></div>
        </div>
      </div>
      {objectsOrdered && objectsOrdered.length
        ? objectsOrdered.map((object, i) => {
            return (
              <ToBuy
                key={i}
                object={object}
                handleEdit={handleEdit}
                isEditable={isEditable}
                return_Date={return_Date}
                setHasChangedObject={setHasChangedObject}
                setObjectsOrdered={setObjectsOrdered}
                objectsOrdered={objectsOrdered}
              />
            );
          })
        : ""}
      <div className="ToBuyComponentTotal">
        Prio 0 Total: {prioZeroTotal} LEI
      </div>
      <div className="ToBuyComponentTotalDelivery">
        Delivery: {prioZeroTotalDelivery} LEI
      </div>
      <div className="ToBuyComponentTotal">
        Prio 1 Total: {prioOneTotal} LEI
      </div>
      <div className="ToBuyComponentTotalDelivery">
        Delivery: {prioOneTotalDelivery} LEI
      </div>
      <div className="ToBuyComponentTotal">
        Prio 2 Total: {prioTwoTotal} LEI
      </div>
      <div className="ToBuyComponentTotalDelivery">
        Delivery: {prioTwoTotalDelivery} LEI
      </div>
      <div className="ToBuyComponentTotal">Total: {total} LEI</div>
      <div className="ToBuyComponentTotalDelivery">
        Delivery: {totalDelivery} LEI
      </div>
      <div className="ToBuyComponentAddObject" onClick={handleAddToBuy}>
        Add ToBuy
      </div>
    </div>
  );
};

export default ToBuyComponent;
