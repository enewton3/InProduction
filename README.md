# InProduction

- [Overview](#overview)
- [MVP](#mvp)
- [Post-MVP](#post-mvp)
- [Libraries and Dependencies](#libraries-and-dependencies)
- [Client (Front End)](#client-front-end)
  - [Wireframes](#wireframes)
  - [Component Tree](#component-tree)
  - [Component Hierarchy](#component-hierarchy)
  - [Component Breakdown](#component-breakdown)
- [Time Estimates](#time-estimates)
- [Server (Back End)](#server-back-end)

  - [ERD Model](#erd-model)

- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**InProduction** is a productivity and social app for theatrical productions. Create a project to track workflow and get in touch with collaborators quickly. A user can create a project and assign other users roles within that project_

Deployed Link -

<br>

## MVP

- Tables - Users, Projects, Roles
- User Auth
- Full CRUD on Projects
- Fully responsive Styling (Look into MaterialUI, maybe use Sass?)
- Deployed to Heroku and Netlify

<br>

## Post-MVP

- Expand Active storage - uploading files to AWS
- Desktop version - Electron
- Mailing
- In-App messaging
- Upload project image to AWS

### Libraries and Dependencies

|         Library          | Description                         |
| :----------------------: | :---------------------------------- |
|          React           | _React._                            |
|       React Router       | _Routing for React_                 |
|          Rails           | _Rails_                             |
|       FontAwesome        | _Font Awesome Icon Libraries_       |
|          Axios           | _FrontEnd API calls_                |
|           JWT            | _JWT For AUTH_                      |
|           Cors           | _Backend CORS_                      |
|        aws-sdk-s3        | _AWS Active Storage_                |
| active_model_serializers | _serializer for rails and AWS_      |
|       Material UI        | _Material UI for styled components_ |

<br>

### Client (Front End)

#### Wireframes

[Figma Wireframes](https://www.figma.com/file/4bN1wZj37GIoflVn7VgPNK/InProduction-Wireframes?node-id=0%3A1)

#### Component Tree

[Draw.io Component Tree](https://drive.google.com/file/d/11xsAV4mPvM3gBP1ncEykgEfVi0u5QC7p/view?usp=sharing)

#### Component Hierarchy

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ containers/
      |__ MainContainer.jsx
|__ components/
      |__ shared/
        |__ NavTop.jsx
        |__ NavLeft.jsx
        |__ Layout.jsx
|__ screens/
      |__ LandingPage.jsx
      |__ ProjectDetail.jsx
      |__ ProjectForm.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ projects.js

```

#### Time Estimates

| Task                                        | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Wireframes, planning, ReadMe, etc...        |    L     |     6 hrs      |     6 hrs     |    6 hrs    |
| Github Setup                                |    L     |     1 hrs      |     2 hrs     |    3 hrs    |
| BACKEND Setup                               |    H     |     1 hrs      |     1 hrs     |     TBD     |
| BACKEND Table and models setup              |    H     |     2 hrs      |     1 hrs     |     TBD     |
| BACKEND Users Auth and CRUD                 |    H     |     3 hrs      |     1 hrs     |     TBD     |
| BACKEND Projects CRUD                       |    H     |     2 hrs      |     1 hrs     |     TBD     |
| BACKEND Roles table // Associations         |    H     |     3 hrs      |     1 hrs     |     TBD     |
| BACKEND Seed                                |    H     |     3 hrs      |     1 hrs     |     TBD     |
| BACKEND ActiveStorage                       |    M     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Setup                              |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND apiConfig and axios calls          |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Auth                               |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Nav and Layout                     |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Nav and Layout Styling             |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Main Container and API calls       |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Main Container Styling             |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Sign Up                            |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Sign Up Styling                    |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Sign In                            |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Sign In Styling                    |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Project Detail                     |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Project Detail Styling             |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Project Create/Edit/Delete         |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Project Create/Edit/Delete Styling |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Landing Screen                     |    H     |     3 hrs      |     1 hrs     |     TBD     |
| FRONTEND Landing Screen Styling             |    H     |     3 hrs      |     1 hrs     |     TBD     |
| PMVP BACKEND AWS File uploads               |    L     |     3 hrs      |     1 hrs     |     TBD     |
| PMVP FRONTEND Social Aspects?               |    L     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL                                       |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

## Server (Back End)

#### ERD Model

[Draw.io ERD](https://drive.google.com/file/d/1N-NiaZCIWEdwmHLy-4wM6nOrUszy3M6k/view?usp=sharing)

<br>

### Code Showcase

### Code Issues & Resolutions
