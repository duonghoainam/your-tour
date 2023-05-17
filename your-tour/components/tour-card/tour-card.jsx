import MoreLink from '@components/more-link/more-link';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

class CardHeader extends React.Component {
   render() {
      const { image } = this.props;
      return (
         <div id={image} className="card-header">
            <img src={image} alt="" />
         </div>
      );
   }
}

class CardBody extends React.Component {
   render() {
      return (
         <div className="card-body">

            <h2>{this.props.title}</h2>

            <p className="body-content">{this.props.fromTo}</p>

            <p className="body-content">- Time: {this.props.time}</p>

            <p className="body-content">- Vehicle: {this.props.vehicle}</p>

            <p className="body-content card-description">- Description: {this.props.text}</p>

            {/* <div className="view-more">
               <MoreLink text={'Price: From 3.000.000'} href={'/tour/1'} />
            </div> */}
         </div>
      );
   }
}

export default function TourCard({ title, url, thumbnail, time, vehicle, fromTo, schedule, className = '' }) {
   return (
      <a href={url} target="_blank" rel="noreferrer">
         <article className={'tour-card' + className}>
            <CardHeader image={thumbnail} />
            <CardBody
               title={title}
               text={schedule}
               time={time}
               fromTo={fromTo}
               vehicle={vehicle}
            />
         </article>
      </a>
   );
}
