import React, { useState } from "react";

// Routers
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// Header, Footer and TnC
import Header from "./Base/Header";
import Navbar from "./Base/Navbar";
import Footer from "./Base/Footer3";
import PrivacyPolicy from "./Base/PrivacyPolicy";

// Landing Page
import LandingPage from "./pages/LandingPage";

// Login and Signup
import Signup from "./Login/Signup";
import Signin from "./Login/Signin";
import Auth from "./Login/Auth";

// Goals
import Goals from "./Login/Goals";

// Dashboards
import Dashboard from "./pages/Dashboards/Dashboard";
import MDashboard from "./pages/Dashboards/MDashboard";

// Exercise
import Exercise from "./pages/Exercises/Exercise";
import MExercise from "./pages/Exercises/MExercise";
import ExerciseHome from "./pages/Exercises/ExerciseHome";

// Exercises
import LegsTricepsCalves from "./pages/Exercises/LegsTricepsCalves";
import ChestBackAbs from "./pages/Exercises/ChestBackAbs";
import Cardio from "./pages/Exercises/Cardio";
import ShouldersBicepsForearms from "./pages/Exercises/ShouldersBicepsForearms";
import Stretching from "./pages/Exercises/Stretching";

// Chat
import DietChatBot from "./DietChatBot/Chat";
import HealthChatBot from "./HealthChatBot/Chat";
import ExerciseChatBot from "./ExerciseChatBot/Chat";

// Trackers
import CaloriesIntake from "./pages/Trackers/CaloriesIntake";
import CaloriesBurnt from "./pages/Trackers/CaloriesBurnt";
import WeightTracker from "./pages/Trackers/WeightTracker";
import StepsCounter from "./pages/Trackers/StepsCounter";

// Profile
import Profile from "./pages/Profile/Profile";
import FriendProfile from "./pages/Profile/FriendProfile";

// Store
import Store from "./pages/Store/Store";
import Product from "./pages/Store/Product";

// Leaderboard
import Leaderboard from "./pages/Leaderboard";

// Events
import Events from "./pages/Events";

// recommendation
import Workout from "./pages/Workout/Workout";
import Posture from "./pages/Posture/Posture";
import Recommendation from "./pages/Recommendation/Recommendation";
import Consent from "./pages/Consent";
import Temp from "./pages/Temp";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/auth/getToken" element={<Auth />} />

        <Route
          exact
          path="/"
          element={
            <div>
              <Header />
              <LandingPage />
              <Footer />
            </div>
          }
        />
        <Route
          exact
          path="/signin"
          element={
            <div>
              <Signin />
            </div>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <div>
              <Signup />
            </div>
          }
        />
        <Route
          exact
          path="/goals"
          element={
            <div>
              <Goals />
            </div>
          }
        />

        <Route
          exact
          path="/tnc"
          element={
            <div>
              <Navbar />
              <PrivacyPolicy />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/chat/diet"
          element={
            <div>
              <Navbar />
              <DietChatBot />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/chat/health"
          element={
            <div>
              <Navbar />
              <HealthChatBot />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/chat/injury"
          element={
            <div>
              <Navbar />
              <ExerciseChatBot />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/profile"
          element={
            <div>
              <Navbar />
              <Profile />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/dashboard"
          element={
            <div>
              <Navbar />
              {<MDashboard /> /*<Dashboard />*/}
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/m/dashboard"
          element={
            <div>
              <Navbar />
              <MDashboard />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/exercise"
          element={
            <div>
              <Navbar />
              <ExerciseHome />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/exercise/pick-a-workout"
          element={
            <div>
              <Navbar />
              <Exercise />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/m/exercise/pick-a-workout"
          element={
            <div>
              <Navbar />
              <MExercise />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/exercise/chest-abs-back"
          element={
            <div>
              <Navbar />
              <ChestBackAbs />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/exercise/legs-triceps-calves"
          element={
            <div>
              <Navbar />
              <LegsTricepsCalves />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/exercise/shoulders-biceps-forearms"
          element={
            <div>
              <Navbar />
              <ShouldersBicepsForearms />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/exercise/cardio"
          element={
            <div>
              <Navbar />
              <Cardio />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/exercise/stretching"
          element={
            <div>
              <Navbar />
              <Stretching />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/trackers/steps"
          element={
            <div>
              <Navbar />
              <StepsCounter />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/trackers/weight"
          element={
            <div>
              <Navbar />
              <WeightTracker />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/trackers/calories-intake"
          element={
            <div>
              <Navbar />
              <CaloriesIntake />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/trackers/calories-burnt"
          element={
            <div>
              <Navbar />
              <CaloriesBurnt />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/store"
          element={
            <div>
              <Navbar />
              <Store />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/store/:id"
          element={
            <div>
              <Navbar />
              <Product />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/leaderboard"
          element={
            <div>
              <Navbar />
              <Leaderboard />
            </div>
          }
        />

        <Route
          exact
          path="/events"
          element={
            <div>
              <Navbar />
              <Events />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/users/:id"
          element={
            <div>
              <Navbar />
              <FriendProfile />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/workout"
          element={
            <div>
              <Navbar />
              <Workout />
              <Footer />
            </div>
          }
        />

        <Route
          exact
          path="/posture"
          element={
            <>
              <Navbar />
              <Posture />
              <Footer />
            </>
          }
        />

        <Route exact path="/recommendation" element={<>

          <Navbar />
          <Recommendation />
          <Footer />

        </>} />

        <Route exact path="/consent" element={<>

          <Navbar />
          <Consent />
          <Footer />

        </>} />

        <Route exact path="/temp" element={<>

          <Navbar />
          <Temp />
          <Footer />

        </>} />

      </Routes>
    </Router>
  )
}
