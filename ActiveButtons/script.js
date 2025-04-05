HTML CSS JSResult Skip Results Iframe
let store = {};





createElement = ( tagName, props = {} ) => {
  
  let element = document.createElement( tagName );

  Object.keys( props ).forEach( function( prop ) {
    if ( [ 'role', 'selected' ].includes( prop ) || prop.indexOf( 'data-' ) == 0 ) {
      if ( prop != 'selected' || ( prop == 'selected' && props[ prop ] != '' ) )
        element.setAttribute( prop, props[ prop ] );
    } else {
      element[ prop ] = props[ prop ];  
    }
  });

  return element;
  
}





const initialize = () => {


  drawVehicle();


}





const drawVehicle = () => {


  let page = document.querySelector( '.container' );


  let container = createElement( 'div', { 'className': 'vehicle' } );
  
  
  container.appendChild( drawSelect() );
  container.appendChild( drawRadio() );
  container.appendChild( drawSwitch() );
  
  
  page.appendChild( container ); 


}





const drawSelect = () => {


  let container = createElement( 'div', { 'className': 'fieldContainer options flexColumn' } );
  container.appendChild( createElement( 'h1', { 'textContent': 'Tell us about your vehicle' } ) );


  let fields = createElement( 'div', { 'className': 'fields flexRow' } );
  
  
  let field = createElement( 'div', { 'className': 'field option flexRow' } );
  let label = createElement( 'label', { 'textContent': 'Year' } );
  let input = createElement( 'input', { 'type': 'text', 'name': 'vehicleYear', 'placeholder': 'Select year' } );
  input.focus();
  let options = createElement( 'div', { 'className': 'optionList' } );
  
  
  [ '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012' ].forEach( ( year ) => {
    
    
    let option = createElement( 'div', { 'className': 'optionItem flexRow', 'textContent': year } );
    
    
    option.addEventListener( 'click', setSelectValue.bind( this, option, input ) );
    
    
    options.appendChild( option );
    
    
  });
  
  
  let arrow = createElement( 'div', { 'className': 'arrow' } );
  
  
  field.appendChild( label );
  field.appendChild( input );
  field.appendChild( options );
  field.appendChild( arrow );
  
  
  fields.appendChild( field );
  
  
  container.appendChild( field );
  
  
  field.addEventListener( 'click', toggleSelect.bind( this, field ) );
  input.addEventListener( 'keyup', filterOptions.bind( this, input, field ) );
  
  
  return container;


}





const toggleSelect = ( field ) => {
  
  
  field.classList.toggle( 'active' );
  
  
}





const setSelectValue = ( option, input ) => {
  
  
  input.value = option.textContent;
  
  
}





const filterOptions = ( input, field ) => {
  
console.log( input.value );
  Array.from( field.querySelectorAll( '.optionItem' ) ).forEach( ( item ) => ( !item.textContent.includes( input.value ) ) ? item.classList.add( 'displayNone' ) : item.classList.remove( 'displayNone' ) );
  
  
}





const drawRadio = () => {


  let container = createElement( 'div', { 'className': 'fieldContainer radios flexColumn' } );


  container.appendChild( createElement( 'h1', { 'innerText': 'Do you own or lease your vehicle?' } ) );


  let fields = createElement( 'div', { 'className': 'flexRow' } );


  [ { name: 'ownPaid', label: 'Own', span: 'paid in full' }, { name: 'ownPaying', label: 'Own', span: 'making payments' }, { name: 'lease', label: 'Lease', span: null } ].forEach( element => {


    let field = createElement( 'div', { 'className': 'field radio flexRow noWrap' } );
    let input = createElement( 'input', { 'id': element.name, 'type': 'radio', 'name': element.name } );
    let disc = createElement( 'div', { 'className': 'disc flexRow flexCenter' } );
    let label = createElement( 'label', { 'innerHTML': element.label + ( ( element.span ) ? '<span> - ' + element.span + '</span>' : '' ) } );


    field.appendChild( input );
    field.appendChild( disc );
    field.appendChild( label );


    field.addEventListener( 'click', toggleRadio.bind( this, field ) );


    fields.appendChild( field );


  });
  
  
  container.appendChild( fields );


  return container;


}





const toggleRadio = ( field ) => {


  Array.from( field.parentElement.querySelectorAll( '.radio' ) ).forEach( r => {


    if ( r.classList.contains( 'active' ) )
      r.classList.remove( 'active' );


    if ( r.querySelector( 'input' ).checked == true )
      r.querySelector( 'input' ).checked = false;

  });


  field.classList.toggle( 'active' );
  field.querySelector( 'input' ).checked = true;
  

}





const drawCheckbox = () => {


  let container = createElement( 'div', { 'className': 'fieldContainer toggles flexColumn' } );
  let header = createElement( 'h1', { 'textContent': 'Do you want to add another vehicle?' } );
  let field = createElement( 'div', { 'className': 'field toggle flexRow noWrap' } );


  let disc = createElement( 'div', { 'className': 'disc flexRow flexCenter' } );
  disc.appendChild( createElement( 'div', { 'innerHTML': '<svg xmlns="http://www.w3.org/2000/svg" width="16.233" height="12.616" viewBox="0 0 16.233 12.616"><path id="check" class="toggleCheck" d="M203,628l4.56,4.56,7.44-9" transform="translate(-200.879 -621.445)"/></svg>' } ) );


  let label = createElement( 'label', { 'innerHTML': 'Yes' } );


  field.appendChild( disc );
  field.appendChild( label );


  field.addEventListener( 'click', toggleToggle.bind( this, field ) );


  container.appendChild( header );
  container.appendChild( field );


  return container;


}





const toggleCheckbox = ( field ) => {


  field.classList.toggle( 'active' );


}





const drawSwitch = () => {


  let container = createElement( 'div', { 'className': 'fieldContainer switches flexColumn' } );
  let header = createElement( 'h1', { 'textContent': 'Do you want to add another vehicle?' } );
  let field = createElement( 'div', { 'className': 'field switch flexRow flexCenter noWrap' } );
  let track = createElement( 'div', { 'className': 'switchTrack' } );
  let label = createElement( 'label', { 'textContent': 'No' } );
  let disc = createElement( 'div', { 'className': 'disc flexRow flexCenter' } );


  field.appendChild( track );
  field.appendChild( label );
  field.appendChild( disc );


  field.addEventListener( 'click', toggleSwitch.bind( this, field ) );


  container.appendChild( header );
  container.appendChild( field );


  return container;


}





const toggleSwitch = ( field ) => {


  let label = field.querySelector( 'label' );


  field.classList.toggle( 'active' );


  ( field.classList.contains( 'active' ) ) ? label.textContent = 'Yes' : label.textContent = 'No';


}




initialize();
