import React from 'react';
import { motion } from 'framer-motion';
import './Books.css';

const booksData = [
    {
        title: "Whispers From The Dark",
        image: "/assets/img/book1.jpg",
        description: "Amy Peters is a young girl with a gift and a tragic start in life. Sent away to boarding school she has to fend for herself without anyone to support her. When she arrives at Carisbrooke School in Dorset, one in a growing list of schools, something awakens in the surrounding woods. At the same time something awakens in Amy as well. A power that she doesn't know she possesses.",
        linkText: "You can purchase a copy from Amazon by clicking",
        linkUrl: "https://amzn.to/2yIPw3v"
    },
    {
        title: "Coming Soon!",
        image: "/assets/img/demo-image-02.jpg",
        description: "A sequel to Whispers From The Dark is due in 2026. Follow Russell on social media or send him an email to be notified when this book, or any future work, is published.",
        linkText: null,
        linkUrl: null
    }
];

const Books = () => {
    return (
        <section id="books" className="books-section">
            <div className="container mx-auto px-4">
                {booksData.map((book, index) => (
                    <motion.div
                        key={index}
                        className={`book-row ${index % 2 !== 0 ? 'reverse' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="book-image-wrapper">
                            <img src={book.image} alt={book.title} className="book-image" />
                        </div>

                        <div className="book-content">
                            <h2 className="book-title">{book.title}</h2>
                            <p className="book-desc">{book.description}</p>
                            {book.linkUrl && (
                                <p className="book-desc">
                                    {book.linkText}{' '}
                                    <a href={book.linkUrl} className="book-link" target="_blank" rel="noopener noreferrer">here</a>.
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Books;
