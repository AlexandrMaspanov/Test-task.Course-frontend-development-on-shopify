class Collaps {

    constructor() {

        this.collapsibleActionVisible = document.querySelector('.collapsible__action--visible');
        this.collapsibleActionHidden = document.querySelector('.collapsible__action--hidden');
        this.collapsibleContent = document.querySelector('.collapsible__content');

        this.collapsibleActionVisible.style.display = 'none';
        this.collapsibleActionHidden.style.display = 'block';
        this.collapsibleContent.style.display = 'none';
    }

    handleEvent() {

        if(this.collapsibleActionHidden.style.display == 'block') {

            this.collapsibleActionHidden.style.display = 'none';
            this.collapsibleActionVisible.style.display = 'block';

        } else {

            this.collapsibleActionVisible.style.display = 'none';
            this.collapsibleActionHidden.style.display = 'block';

        }

        const collapsibleContentAnimationShow = [

            {transform: 'translateY(-100%)', opacity: '0'},
            {transform: 'translateY(0)', opacity: '1'}

        ];

        const collapsibleContentAnimationTiming = {

            duration: 500,
            easing: 'ease-in-out'

        }

        const collapsibleContentAnimation = this.collapsibleContent.animate(

            collapsibleContentAnimationShow,
            collapsibleContentAnimationTiming

        )

        collapsibleContentAnimation.pause();

        if(this.collapsibleContent.style.display == 'none') {

            this.collapsibleContent.style.display = 'block';
            collapsibleContentAnimation.playbackRate = 1;
            collapsibleContentAnimation.play();

        } else {

            collapsibleContentAnimation.playbackRate = -1;
            collapsibleContentAnimation.play();

            setTimeout(() => {

                this.collapsibleContent.style.display = 'none';

            }, collapsibleContentAnimationTiming.duration);

        }

    }

}

const collaps = new Collaps();
const collapsibleButton = document.querySelector('.collapsible__button');

collapsibleButton.addEventListener('click', collaps);