import React, { useEffect, useState } from "react";
/*

'weight'
'height'
'stepGoal'
'calGoal'
'weightGoal'
'name' //for profedgeile pics with ui-avatars.com
'updatedAt' // to send health warning notifications (probably not need)
'cal24h' //Sum cals burnt in 24 hours
'step24h' //Sum steps taken in 24 hours
'foodCal' //Food cal intake for today
'foodPro' //food protien intake for today
'foodFat' //foot fat intake for today
'calIntake7d'
'friendArray'

*/
export default function GetData(props) {
    const [notified, setNotified] = useState(false);
    useEffect(() => {
        const hourSum = (array) => {
            const date = new Date();
            let sum = 0;
            const count = 23 - date.getHours();
            for (let i = count; i < 24; i++) {
                sum += array[i];
            }
            return sum;
        };
        const handleNotification = (text) => {
            if (!("Notification" in window)) {
                alert("This browser does not support notifications");
            } else {
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted" && !notified) {
                        new Notification(text);
                        setNotified(true);
                    }
                });
            }
        };
        props.update(1);

