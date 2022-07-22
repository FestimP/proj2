
import "../App.css";
import React, { useState } from 'react';

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Domains',
            title: '.COM',
            content: '$5.99/yr',
            span:'Instead of $10.99/yr',
            button:"Buy now"
        },
        {
            id: 2,
            tabTitle: 'All',
            title: '.COM',
            content: '$5.99/yr',
            span:'Instead of $10.99/yr',
            button:"Buy now"
        },
        {
            id: 3,
            tabTitle: 'All',
            title: '.COM',
            content: '$5.99/yr',
            span:'Instead of $10.99/yr',
            button:"Buy now"
        },
        {
            id: 1,
            tabTitle: 'Domains',
            title: '.COM',
            content: '$5.99/yr',
            span:'Instead of $10.99/yr',
            button:"Buy now"
        },
        {
            id: 1,
            tabTitle: 'Domains',
            title: '.COM',
            content: '$5.99/yr',
            span:'Instead of $10.99/yr',
            button:"Buy now"
        },
        {
            id: 1,
            tabTitle: 'Domains',
            title: '.COM',
            content: '$5.99/yr',
            span:'Instead of $10.99/yr',
            button:"Buy now"
        },
        {
            id: 1,
            tabTitle: 'Domains',
            title: '.COM',
            content: '$5.99/yr',
            span:'Instead of $10.99/yr',
            button:"Buy now"
        },
        {
            id: 1,
            tabTitle: 'Domains',
            title: '.COM',
            content: '$5.99/yr',
            span:'Instead of $10.99/yr',
            button:"Buy now"
        },
        {
            id: 1,
            tabTitle: 'Domains',
            title: '.COM',
            content: '$5.99/yr',
            span:'Instead of $10.99/yr',
            button:"Buy now"
        },
        {
            id: 1,
            tabTitle: 'Domains',
            title: '.COM',
            content: '$5.99/yr',
            span:'Instead of $10.99/yr',
            button:"Buy now"
        },
     
    ];
   

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div className="coco">
                            <p className='title'>{tab.title}</p>
                            <p className="tab-content">{tab.content}</p>
                            <p className="span">{tab.span}</p>
                            <button className="btn">{tab.button}</button>
                            </div>
                            }
                    </div>
                )}
            </div>
        </div>
    );
}
export default Tabs;