import React, {Component} from 'react';
import Person from '../Persons/Person/Person';


class Persons extends Component {


    constructor(props) {
        super(props);
        console.log('[Persons.js] inside Constructor', props);
    }


    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount');
    }

    render(){
        console.log('[Persons.js] inside render()')
        return (

            this.props.persons.map((person, index) => {
                return (
                    <Person
                        key={person.id}
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}

                        changed={(event) => this.props.changed(event, person.id)} />
                );
            })

        );

    }
}  

export default  Persons;