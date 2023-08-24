export const setBodyNoScroll = bool => {
    if (bool) {
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
    } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
};

export const checkMediaUrl = link => {
    const images = ['jpg', 'jpeg', 'jpe', 'jp2', 'svg', 'svgz', 'gif', 'png', 'webp', 'tiff', 'tif'];
    const videos = ['mp4', 'avi', 'mov', 'mpg', 'mp2'];

    if (link === null) {
        return '';
    }

    const url = new URL(link.image !== undefined ? link.image.toLowerCase() : link.toLowerCase());
    const extension = url.pathname.split('.')[1];

    if (images.includes(extension)) {
        return 'image';
    } else if (videos.includes(extension)) {
        return 'video';
    }
};

export const stringToKey = str => str.replace(/\s+/g, '_').toLowerCase();

export const scrollToTargetOffset = (el, offset = 0) => {
    const elPosition = el.getBoundingClientRect().top;
    const offsetPosition = elPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    });
};
