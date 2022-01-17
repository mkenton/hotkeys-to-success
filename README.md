# HotKeys to Success #

HotKeys to Success is an interactive playground for mastering productivity-boosting shortcuts for beginner and expert programmers alike. We often find ourselves repeating actions, typing out long statements, and retracing our footsteps in suboptimal ways. In the back of our heads, we often think "there's probably a better way," but we continue with our stubborn habits while myopically focusing only on the code of our present projects. But of course there's a better way! Maybe *you* will have to be the one to make it, but chances are, *something* is out there, and you just need to take the moment to find it! HotKeys to Success aims to teach you shortcuts, allow you to practice them in fun ways, and foster discussion for sharing productivity and QoL (Quality-of-Life) improvement ideas.

 **Interact with Hotkeys to Success  [here](https://hotkeys-to-success.herokuapp.com/ "Hotkeys-to-Success")** (the hosted front-end). You are reading currently the read-me for the front-end repository! The repo for the back end can be found [here](https://github.com/mkenton/hotkeys-to-success-backend "Hotkeys-to-Success-API").

HotKeys to Success is a web app comprising 3 main components:
1. Lessons on VSCode Shortcuts, CLI configs, and other productivity-increasers and time-savers
2. Arcade section to put your keyboard shortcut skills to test
3. QoL-centered discussion board where users share their own QoL improvements (useful shortcuts, configurations, bash/zsh aliases, etc.) (stretch goal)



# Project Details and Future Work #

## User Stories ##
- As a user, I want to be able to create an account so that I can log in and use the application.
- As a user, I want to be able to navigate between viewing lessons, games, and discussion.
- As a user, I want to be able to view lessons. 
- As a user, I want to be able to interact with a lesson (e.g. learn a shortcut, see my keypresses on screen, and see the corresponding action/result as it would appear in VSCode.)
- As A user, I want to be able to mark a lesson complete.
- As a user, I want to be able to track my lesson completion. (Completed lessons for my user should persist when I log out and log back in).
- As a user, I want to be able to navigate to a page to play 'Shortcut Arcade' where I am quizzed on keyboard shortcuts am scored on my performance.
- As a user, I want to be able to view my high scores on 'Shortcut Arcade' and view top scores across all users. 

 *Stretch Goals*
 
- As a user, I want to be able to view a discussion board where QoL topics (e.g. productivity/time-saving techniques & configs) are discussed.
- As a user, I want to be able to view discussion board topics and click into topics where threads are viewed.
- As a user, I want to be able to create a thread.
- As a user, I want to be able to post on existing threads.
- As a user, I wan to be able to see the usernames of the poster and commenter and time submitted.
- As a user, I want to be able to edit my own posts. (*stretch: formatting on posts!*)
- As a user, I want to be able to see that a post is edited, with time of edit.

- As an admin, I want to be able to moderate posts.
- As an admin, I want to be able to create new categories.


## Models & Relationships ##

User has many Lessons through LessonEvents

Lessons has many Users through LessonEvents

User has many Posts

Post has one User


### Users ###
- id
- user_name
- display_name
- password_digest

### Posts ###
- id
- title
- body (text)
- created_date
- updated_date
- user_id (foreign key)
- category_id (foreign key)
- parent_post (foreign key (?), references id of records in this Posts table) - _"null"_ if first post, references _post_id_

### Lessons ###
- id
- title
- lesson_category

### LessonEvents ###
- id
- user_id (foreign key)
- lesson_id (foreign key)
- status


### Score ###
*(Stretch goal)*
- id
- user_id (foreign key)
- score (int)
- game_id (if tracking scores of multiple games)

## API Documentation ##


### Routes ###

__POST__ *"/users"*

Creates new users upon signup and authenticates. Requires a unique username and non-empty password. If new user validates, JSON response appears in the following form:
```json
{
  "user": {
          "id": 2,
          "username": "JohnSmith",
          "display_name": "JohnSmith",
          "role": "student"
  },
  "jwt": "example.encrypted.token"
}
```

For invalid logins (e.g., username is not unique and/or no password provided), JSON response appears in the following form:
```json
{
  "error": [
        "Password can't be blank",
        "Username has already been taken"
  ]
}
```

__POST__: *"/login"*

If login credentials are valid, returns user information and JWT. Response JSON appears as follows:
```json
{
  "user": {
      "id": 2,
      "username": "JohnSmith",
      "display_name": "Jonny_S",
      "role": "student"
  },
  "jwt": "example.encrypted.token"
}
```

If login credentials are invalid, Response JSON returns error message:

```json
{
    "message": "Invalid username or password"
}
```

__POST__: *"/lessoncomplete"*

Creates a new lesson_event for user on a lesson, e.g. to mark lesson complete.

JSON response appears in the following form:
```json
{
  "id": 1,
  "status" : "completed",
  "lesson_id" : 1,
  "user_id": "2"
}
```

__GET__: *"/user-progress"*

Returns lesson_events for given user. JSON Response appears in the following form:

```json
{
  "progress": [
    {
      "id": 1,
      "status" : "completed",
      "lesson_id" : 1,
      "user_id": "2"
    },
    {
      "id": 2,
      "status" : "completed",
      "lesson_id" : 2,
      "user_id": "2"
    }
  ]
}
```


__GET__: *"/categories"*

Returns discussion board categories. Response JSON looks like this:
```json
{ 
  category_id: 1
  category: "CLI Configurations",
  num_posts: "20",
}
{ 
  category_id: 2
  category: "VSCode Shortuts",
  num_posts: "12",
}
{ 
  category_id: 3
  category: "Useful Extensions",
  num_posts: "15",
}
```

__GET__: *"/categories/:id"*

Returns discussion posts for specific category. Response JSON looks like this:
```json
{ 
  id: 10
  title: "Useful aliases for git workflow"
  body: "Below are some aliases I have set up in my zsh config file (~/.zshrc) which save me a lot of time! ..."
  created_date: "10/15/2021 12:45:02"
  updated_date: "10/15/2021 12:45:02"
  user_id: 9
  category_id: 1
  parent_post: null
}
{ 
  id: 2
  title: null
  body: "Thanks this is a life saver!"
  created_date: "10/15/2021 12:55:02"
  updated_date: "10/15/2021 12:55:02"
  user_id: 17
  category_id: 1
  parent_post: 10
}
```


__POST__: *"/categories/:parent_id"/new*

Returns discussion posts for specific category. Response JSON looks like this:
```json

{ 
  id: 3
  title: null
  body: "I have constructive criticism!"
  created_date: "10/15/2021 12:57:02"
  updated_date: "10/15/2021 12:57:02"
  user_id: 17
  category_id: 1
  parent_post: 10
}
```
