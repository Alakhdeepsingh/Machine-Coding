import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import './index.css';

const Content = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const response = await fetch("https://alkye-test-422384984803.us-central1.run.app/myapp/list/");
            const data = await response.json();
            const selected = data.find((el) => String(el.id) === id);
            setItem(selected);
        };

        fetchItem();
    }, [id]);

    if (!item) return <div>Loading...</div>;

    return (
        <div className="content-container">
            <div className="logo-section">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="main-title">alkye</h1>
                <p className="subtitle">The easiest test you will ever do</p>
            </div>

            <div className="image-section">
                <img src={item.image_url} alt={item.title} className="main-image" />
            </div>

            <div className="text-section">
                <span className="tag">Photography</span>
                <h2 className="headline">{item.short_description}</h2>
                <p className="description">{item.content}</p>
            </div>
        </div>
    );
};

export default Content;
