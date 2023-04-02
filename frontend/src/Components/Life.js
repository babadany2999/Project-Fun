import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "../Styles/Life.css";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../Apollo/Queries/Tasks";
import ToBuy from "./Jobs/Life/ToBuy";
import client from "../Apollo/index";

const Life = () => {
  // Priority 0 - URGENT/ASAP
  // Priority 1 - NOT URGENT but important
  // Priority 2 - Whenever possible

  // Price in LEI

  // Query and Mutations
  const { error, loading, data } = useQuery(getTasks, {});
  //

  const [objectsNeeded, setObjectsNeeded] = useState();

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
          });
        }
        setObjectsNeeded(dummy_arr);
      }
    }
  }, [data]);

  const [total, setTotal] = useState(0);

  const [isEditable, setIsEditable] = useState();

  const [objectsOrdered, setObjectsOrdered] = useState(null);

  const [hasChangedObject, setHasChangedObject] = useState(0);

  useEffect(() => {
    if (objectsNeeded) {
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

  useEffect(() => {
    if (hasChangedObject === true) {
      setHasChangedObject(false);
      client.refetchQueries({
        include: [getTasks],
      });
    }
  }, [hasChangedObject]);

  const return_Date = (dateNeeded) => {
    if (dateNeeded === 0 || !dateNeeded) return "???";
    var return_str = "";
    if (dateNeeded.getDate() < 10) {
      return_str += "0" + dateNeeded.getDate() + "/";
    } else {
      return_str += dateNeeded.getDate() + "/";
    }
    if (dateNeeded.getMonth() < 10) {
      return_str += "0" + (parseInt(dateNeeded.getMonth()) + 1) + "/";
    } else {
      return_str += parseInt(dateNeeded.getMonth()) + 1 + "/";
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
        <div className="LifeObjectsNeededTotal">Total: {total} LEI</div>
        <div className="LifeObjectsAddObject" onClick={handleAddToBuy}>
          Add ToBuy
        </div>
      </div>
    </div>
  );
};

export default Life;
