# MEETIO - Anonymous Video/Voice chat platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)

A real-time anonymous chat platform inspired by Omegle — **no sign-up required, instant chatting, and privacy-focused by design**.
Users can connect with random people and start chatting immediately without creating an account or sharing personal information.

**Live Demo:** [https://meetio-xi.vercel.app/](https://meetio-xi.vercel.app/)

## ✨ Features:
- 🔓 **No Sign-Up Required**  
  Start chatting instantly. No email, no phone number, no authentication.

- 💬 **Real-Time Chat**  
  Fast and smooth one-on-one anonymous messaging.

- 🕶 **Fully Anonymous**  
  No usernames, no profiles, no identity exposure.

- 🔁 **Instant Disconnect / Next Chat**  
  Leave or switch chats anytime.

## 🔄 Real-Time Architecture

- **Socket.IO** is used for:
  - User matchmaking
  - Real-time messaging
  - Connection & disconnection handling

- **ZEGOCLOUD** is used for:
  - Real-time communication services
  - Low-latency and scalable session handling

The platform itself **does not store any messages or personal data**.

## 🛠️ Tech Stack

-   **Frontend:** [Typescript.js](https://www.typescriptlang.org/)
-   **Backend:** [Node.js](https://nodejs.org/)
-   **Real-Time Communication:** **Socket.IO**  
-   **Media / RTC Services:** **ZEGOCLOUD**

## ⚙️ Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18+)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/ArcSaber21/MEETIO.git](https://github.com/ArcSaber21/MEETIO.git)
    cd MEETIO
    ```

2.  **Install Dependencies**
    *(If your project has separate client/server folders, navigate to each and install)*
    ```bash
    npm install
    ```

## 🔐 Environment Variables Setup

You must create **separate `.env` files** in both **client** and **server** folders.


### 📁 Client (`/client/.env.local`)

```env
NEXT_PUBLIC_SOCKET_URL=""
NEXT_PUBLIC_ZEGO_APP_ID=
NEXT_PUBLIC_ZEGO_SERVER_SECRET=""
```
### 📁 Server (`/server/.env`)
```env
PORT="8000"
``` 

**Run the Application**

```bash
    # Command may vary based on your package.json scripts
    npm run start
    # or for development
    npm run dev
 ```

## 🚢 Deployment

Frontend: Vercel.  
Backend: Render.



