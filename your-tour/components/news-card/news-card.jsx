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
            <p className="date">{this.props.date}</p>

            <h2>{this.props.title}</h2>

            <p className="body-content">{this.props.text}</p>

            <div className="view-more">
               <MoreLink text={'Find Out More'} href={'https://www.kkfund.co/'} />
            </div>
         </div>
      );
   }
}

export default function NewsCard({ url, banner, title, description, date, className = '' }) {
   return (
      <Link href={url} target="_blank" rel="noreferrer">
         <article className={'card' + className}>
            <CardHeader image={banner} />
            <CardBody
               title={title}
               text={description}
               date={date}
            />
         </article>
      </Link>
   );
}
