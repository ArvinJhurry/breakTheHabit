# Habit Tracker

Contents 
==========================
* [Project Description](#project-description)
* [Functionalities](#functionalities)
    * [Website Functionality](#website-functionality)
    * [Technical Requirements](#technical-requirements)
    * [Api Endpoints](#api-endopoints)
* [Installation & Usage](#installation--usage)
* [Technologies](#technologies)
* [Process](#process)
* [Wins & Challenges](#wins--challenges)
* [Licence](#licence)


--------

# Project Description

This project is about building a habit tracker.

--------

# Functionalities

## Website Functionality

* Users are able to login `(?)`
* Users are able to choose a habit they want to track (e.g water, exercise, 8 hours of sleep) and choose the frequency at which they want to track the habit `(?)`
* Users are able to track a habit and mark it as complete for the day `(?)`
* Users are able to see if they have completed a habit for the day and see their most recent completion streak `(?)`

## Technical Requirements

* Data is persisted on database
* Aim was: Minimum 60% test coverage with an aim of 80% 
    * result: 56% test coverage on the server (client test was not implemented)

## Api Endopoints

**Where** | **Method** | **What** |
---------------|---------------|------|
http://localhost:3000/auth/register |  `POST` | registers user |
http://localhost:3000/auth/login |  `POST` | user log in |
http://localhost:3000/users |  `GET` | gets all users |
http://localhost:3000/users/:id |  `GET` | gets user by user id |
http://localhost:3000/users  |  `POST` | creates user route |
http://localhost:3000/habits |  `GET` | gets all habits |
http://localhost:3000/habits/:id |  `GET` | gets habit by habit id |
http://localhost:3000/habits/user/:id |  `GET` | gets all habits per user id |
http://localhost:3000/habits |  `POST` | creates habit route |
http://localhost:3000/habits/:id |  `DELETE` | creates delete habit route |

--------

# Installation & Usage

To access database:

        docker exec -it habit_tracker_dev_db psql -U habit_tracker habit


<p align="center">
  <img src="https://github.com/dimi-fn/breakTheHabit/blob/main/client/static/css/schema.PNG" alt="">
</p>                

--------

# Technologies

--------

# Process

* Used [excalidraw.com](https://excalidraw.com/) for the [initial website design](https://excalidraw.com/#room=efb60e1251508f65083e,1WuryX5U-CiHHNIxc2vd2w) `--> to update the content`

* Used project canvas via GitHub to record and track the project tasks

* Used /app.dbdesigner.net/ for drawing the db schema

--------

# Wins & Challenges

## Wins

## Challenges

* Client test was not implemented

-------

# MIT Licence

* [MIT Licence](https://github.com/dimi-fn/breakTheHabit/blob/main/LICENCE)


