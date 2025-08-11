# Transaction Management System
A simple transaction management system with a Rails API backend and React frontend for displaying and managing transactions stored in a CSV file.

# Features
**Backend API:** Rails application with endpoints to retrieve and add transactions

**Frontend UI:** React application with a transaction table and add transaction modal

**Data Storage:** CSV file-based storage

**Status Management:** Transactions with Pending (Yellow), Settled (Green), and Failed (Red) statuses


# Prerequisites
Before running this application, you need to install the following software:


## Recommended Code Editor
**Visual Studio Code** (optional but recommended for viewing/editing code)

- Download and install from: https://code.visualstudio.com/
- Free, cross-platform code editor with excellent support for JavaScript, Ruby, and many other languages

## Required Software

**Git** (for cloning the repository)

- Download and install from: https://git-scm.com/downloads
- Open Git Bash terminal and verify installation: ``git --version``

**Ruby** (version 3.0 or higher)

- Download and install from: https://rubyinstaller.org/ (Windows) or https://www.ruby-lang.org/en/downloads/
- Open bash terminal and verify installation: ``ruby --version``


**Rails** (Ruby on Rails framework)

- Install in terminal after Ruby is installed: ``gem install rails``
- Verify installation: ``rails --version``

**Node.js and npm** (Node.js 16 or higher)

- Download and install from: https://nodejs.org/ (choose LTS version)
- Verify installation: ``node --version`` and ``npm --version``

**Note:** For detailed installation instructions for your operating system, refer to the official documentation links above.
If you have all the prerequisites installed, proceed to **Getting Started**.


# Getting Started
## Step 1: Clone the Repository

Open your Git Bash terminal/command prompt and run:

  *Clone the repository:*

    git clone https://github.com/rkbart/transaction-management-system.git

  *Navigate to the project directory:*

    cd transaction-management-system

## Step 2: Set Up the Rails Backend

**1. Navigate to the project root (if not already there):**

    cd transaction-management-system

**2. Install Bundler (Ruby package manager):**

    gem install bundler

**3. Install Ruby dependencies:**

    bundle install

**Note:** This command reads the Gemfile and installs all required Ruby gems (libraries).

**4. Start the Rails server:**
  
    rails server

*The Rails backend will now be running on http://localhost:3000*

*Keep this terminal window open - the Rails server needs to keep running.*

## Step 3: Set Up the React Frontend

**1. Open a new terminal/command prompt window** (keep the Rails server running in the first one)

**2. Navigate to the React app directory:**

    cd transaction-management-system/client
    
*Note: Adjust the path if your React app is in a different directory*

**3. Install Node.js dependencies:**
    
    npm install

*Note: This command reads package.json and installs all required JavaScript libraries.*

**4. Start the React development server:**
    
    npm start

*The React frontend will now be running on http://localhost:3001 (or another port if 3001 is occupied)*


# Accessing the Application

Once both servers are running:

**1. Frontend (React App):** Open your web browser and go to http://localhost:3001

**2. Backend API:** The Rails API is available at http://localhost:3000 (but no need to open it in the browser)


# Using the Application

**1. View Transactions:** The main page displays all transactions in a table format

**2. Add Transaction:** Click the "Add Transaction" button to open a modal form

**3. Fill Form:** Enter transaction details (date, account number, account holder name, amount)

**4. Submit:** The transaction will be saved and the table will update automatically


# Stopping the Application

To stop the servers:

**Stop React server:** In the React terminal, press Ctrl + C (or Cmd + C on Mac)

**Stop Rails server:** In the Rails terminal, press Ctrl + C (or Cmd + C on Mac)


# Development Notes

- The CSV file is located in storage/transactions.csv
- Transaction status is randomized when adding new transactions
- No authentication is required as per the requirements