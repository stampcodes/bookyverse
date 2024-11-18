# Bookyverse

## Description

**Bookyverse** is a web application that allows users to search for and view details about books. It uses the Open Library API to retrieve book information and features a simple and responsive user interface.

You can explore the live platform at the following link: [Bookyverse Website](https://bookyverse.vercel.app/)

## Features

- **Book Search:** Users can search for books by category.
- **Book Details:** By clicking on a book, users can view details, including title, publication date, and description.
- **Dynamic Loading:** Loading indicators are shown while fetching data.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Programming language that extends JavaScript with static types.
- **Tailwind CSS:** CSS framework for rapid and responsive design.
- **Axios:** Library for making HTTP requests.
- **React Router:** Library for handling navigation in the app.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/stampcodes/bookyverse.git
```

2. Navigate to the project directory:

```bash
cd bookyverse
```

3. Install the dependencies:

```bash
yarn
```

5. Start the development server:

```bash
yarn dev
```

6. Open the app in your browser at http://localhost:5173/

## Project Structure

```bash
src/
├── components/               # Reusable React components
│   ├── books/               # Book-related components
│   │   ├── BookCard.tsx     # Component to display a book
│   │   ├── BookDetails.tsx   # Component to display book details
│   │   └── BookList.tsx      # Component for the list of books
│   ├── Navbar.tsx           # Navigation bar component
├── hooks/                   # Custom hooks for state logic
│   ├── useDetailsBook.ts     # Hook for fetching book details
│   └── useSearchBook.ts      # Hook for searching books
├── pages/                   # App pages
│   ├── HomePage.tsx         # Main page with the list of books
│   └── DescriptionPage.tsx   # Book details page
├── App.tsx                  # Main component of the app
├── index.tsx                # Entry point of the app
└── main.tsx                 # App rendering configuration
```

## License

Distributed under the MIT License.

## Contact

Project created by Andrea Fragnelli.
