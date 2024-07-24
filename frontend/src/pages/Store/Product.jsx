import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { products } from "./Products";
import Web from "../../assets/logo/Web.png";

const Product = () => {
    const [message, setMessage] = useState("");
    const location = useLocation();
    const id = location.pathname.charAt(location.pathname.length - 1);

    // console.log(id);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        for (const friend in JSON.parse(localStorage.getItem("friendArray"))) {
            if (friend._id == id) {
                setFriend(true);
                break;
            }
        }
    }, []);
    const prod = products.find((product) => product.id == id);
    const handleClick = (e) => {
        fetch("https://datahack-backend.onrender.com/api/users/buy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userid: localStorage.getItem("id"),
                points: prod.price,
            }),
        })
            .then((res) => res.json())
            .then((res) => setMessage(res.status));
        if (prod.id == 5) {
            try {
                var stripe = Stripe(
                    "pk_test_51LpQxaSClQus7pNZ0lQl5OXXTRBljK1u01ZRUMbjpDftwojlCqmFxvfP73P1e1mbE89SXJtifG1zifX8yzBHQvyS00i1h5qv1Q"
                );

                stripe
                    .redirectToCheckout({
                        lineItems: [
                            {
                                price: "price_1LqIhhSClQus7pNZnhtG5hU8",
                                quantity: 1,
                            },
                        ],
                        mode: "subscription",
                        successUrl: "http://localhost:3000/dashboard",
                        cancelUrl: "http://localhost:3000/dashboard",
                    })
                    .then(function (result) {
                        alert("Payment Successful!");
                    });
            } catch (error) {
                console.error(error);
            }
        }
    };

