const collapsibleButton = document.querySelector('.collapsible__button');
const collapsibleActionVisible = document.querySelector('.collapsible__action--visible');
const collapsibleActionHidden = document.querySelector('.collapsible__action--hidden');
const collapsibleContent = document.querySelector('.collapsible__content');

collapsibleActionVisible.style.display = 'none';
collapsibleActionHidden.style.display = 'block';
collapsibleContent.style.display = 'none'

const collapsibleContentAnimationShow = [

    {transform: 'translateY(-100%)', opacity: '0'},
    {transform: 'translateY(0)', opacity: '1'}

];

const collapsibleContentAnimationTiming = {

    duration: 500,
    easing: 'ease-in-out'

}

const collapsibleContentAnimation = collapsibleContent.animate(

    collapsibleContentAnimationShow,
    collapsibleContentAnimationTiming

)

collapsibleContentAnimation.pause();

function collapsibleActionChange() {

    if(collapsibleActionHidden.style.display == 'block') {

        collapsibleActionHidden.style.display = 'none';
        collapsibleActionVisible.style.display = 'block';

    } else {

        collapsibleActionVisible.style.display = 'none';
        collapsibleActionHidden.style.display = 'block';

    }

}

function collapsibleContentChange() {

    if(collapsibleContent.style.display == 'none') {

        collapsibleContent.style.display = 'block';
        collapsibleContentAnimation.playbackRate = 1;
        collapsibleContentAnimation.play();

    } else {

        collapsibleContentAnimation.playbackRate = -1;
        collapsibleContentAnimation.play();

        setTimeout(() => {

            collapsibleContent.style.display = 'none';

        }, collapsibleContentAnimationTiming.duration);

    }

}

collapsibleButton.addEventListener('click', () => {

    collapsibleActionChange();
    collapsibleContentChange();

});