import React from 'react';
import {PhotoSwipeGallery} from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';
import './Case.css';

function getThumbnailContent({title, src, thumbnail, w, h}) {
    return (
        <figure>
            <img
                width={w}
                height={h}
                src={thumbnail}
                className="pswp-thumbnail"
            />
            <figcaption dangerouslySetInnerHTML={{__html: title}}/>
        </figure>
    );
}

export function createMediaPictures(pictures) {
    return pictures.map((pic) => {
        pic.w = pic.w || 1280;
        pic.h = pic.h || 720;
        pic.thumbnail = pic.thumbnail || pic.src;
        return pic;
    })
}

export default class CaseMediaPictures extends React.Component {
    render() {
        const {pictures} = this.props;
        return (
            <PhotoSwipeGallery
                items={pictures}
                thumbnailContent={getThumbnailContent}
            />
        );
    }
}
