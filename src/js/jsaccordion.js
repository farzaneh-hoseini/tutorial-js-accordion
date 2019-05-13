function JSAccordion(elementOrSelector) {
    if(!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);

    //  define public methods
    this.init = function() {

            var ulTags, liTags, firstDiv, secondDiv, hTags;
            document.getElementById("main-container").classList.add('jsac-container');

            ulTags = document.querySelector("ul");
            ulTags.classList.add('jsac-list');

            liTags = ulTags.querySelectorAll('li');

            liTags.forEach(function (element) {
                element.classList.add('jsac-list-item');

                firstDiv = element.querySelector("div:first-child");
                firstDiv.classList.add('jsac-header');

                secondDiv = element.querySelector("div:last-child");
                secondDiv.classList.add('jsac-body');

                hTags = element.querySelector('h3');
                hTags.classList.add('jsac-titl-h');

            });

    };

    //  start construction operations
    //  if parameter is element selector
    if(typeof elementOrSelector == 'string') {
        this.targetElement = document.querySelector(elementOrSelector);
        if(this.targetElement == null) {
            throw ('invalid element selector');
        }
    }
    //  if parameter is element DOM object
    else if(typeof elementOrSelector == 'object')
        this.targetElement = elementOrSelector;
    else
        throw ('Unknown element type');

    //  set autoincrement instance id to object
    this.id = JSAccordion.instances.length;

    JSAccordion.instances.push(this);

    return this;
}

//  define static property to keep all instances
JSAccordion.instances = [];