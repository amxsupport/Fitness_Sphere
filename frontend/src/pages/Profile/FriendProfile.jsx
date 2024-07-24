import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChallengedAFriend from "../../assets/badges/badge1.png";
import GoalsReached from "../../assets/badges/badge3.png";
import RadialChart from "../../components/RadialChart";
import BarChart from "../../components/BarChart";
import GetFriendData from "./GetFriendData";
import GetData from "/src/GetData";
// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

const Profile = (props) => {
    const navigate = useNavigate();
    const id = window.location.pathname.slice(7);
    const [update, setUpdate] = useState(1);
    const [challengeAccepted, setChallengeAccepted] = useState(false);
    const [isFriend, setFriend] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        for (const friend of JSON.parse(localStorage.getItem("friendArray"))) {
            console.log(friend);
            if (friend._id == id) {
                setFriend(true);
                break;
            }
        }
    }, []);
    const handleClick = (e) => {
        e.preventDefault();

        if (isFriend) {
            setChallengeAccepted(true);
        } else {
            setFriend(true);
            fetch("https://datahack-backend.onrender.com/api/friend/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userid: localStorage.getItem("id"),
                    friendid: id,
                }),
            });
        }
        navigate("/users/" + id);
        /*fetch("https://datahack-backend.onrender.com/api/friend/competition", {
method: "POST",
headers: {
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  userid: id
  friendid: id
}),
});*/
    };

    // steps
    const data1 = {
        labels: [
            `${localStorage.getItem("friendname")} - Steps`,
            `${localStorage.getItem("name")} - Steps`,
        ],
        datasets: [
            {
                label: "Steps Covered",
                data: [
                    localStorage.getItem("friendstep24h"),
                    localStorage.getItem("step24h"),
                ], //friendstep24h step24h
                backgroundColor: [
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: ["rgba(255, 26, 104, 1)", "rgba(54, 162, 235, 1)"],
                borderWidth: 1,
            },
        ],
    };

