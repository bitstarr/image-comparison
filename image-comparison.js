class ImageComparison extends HTMLElement
{
    static tagName = 'image-comparison';

    constructor()
    {
        super();
        // element created
    }

    connectedCallback()
    {
        // browser calls this method when the element is added to the document
        // (can be called many times if an element is repeatedly added/removed)

        this.slidable();

        if ( !this.style.getPropertyValue( '--value' ) )
        {
            this.setProp( 'value', `${this.slider.value}%` );
        }

        if ( this.hasAttribute( 'aspect-ratio' ) )
        {
            this.setProp( 'ar', this.getAttribute( 'aspect-ratio' ) );
        }
    }

    slidable()
    {
        this.slider = document.createElement( 'input' );
        this.slider.type = 'range';
        this.slider.min = 0;
        this.slider.max = 100;
        this.slider.value = 50;
        this.slider.classList.add( 'range' );
        this.append( this.slider );

        this.slider.addEventListener( 'input', (e) =>
        {
            this.setProp( 'value', `${e.target.value}%` );
        });
    }

    setProp( name, value )
    {
        this.style.setProperty( `--${name}`, value );
    }
}

if ( 'customElements' in window ) {
	customElements.define( ImageComparison.tagName, ImageComparison );
}