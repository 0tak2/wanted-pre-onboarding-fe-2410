/**
 * Intersection Observer 예제
 * @see: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#intersection_observer_concepts_and_usage
 */
const main = () => {
    console.log('onload')

    const options = {
        
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 0.5,
    }

    const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
            console.log('intersectionRatio:', entry.intersectionRatio);
            if (entry.isIntersecting) {
                console.log('마지막 아이템이 root와 교차 상태입니다');
            }
        });
    };
    
    const observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(document.querySelector('#observeTarget'));
};

window.onload = () => {
    main();
};
