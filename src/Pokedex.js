import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
          pokeIndex: 0 
        };
    }

    nextPokemon = () => {
    const { pokeIndex } = this.state;
    const { pokemons } = this.props;
      if (pokeIndex < pokemons.length - 1)
      this.setState( { 
          pokeIndex: pokeIndex + 1 
        } );
      else this.setState({ 
          pokeIndex: 0 
        });
    }

    render() {
      const { pokeIndex } = this.state;
      const { pokemons } = this.props;
        return (
            <div className="pokedex">
              <Pokemon 
                key={ pokemons[pokeIndex] }
                pokemon={ pokemons[pokeIndex] }
              />
              <button
                onClick={ this.nextPokemon }> 
                    Next Pokemon
              </button>
            </div>
        );
    }
}

export default Pokedex;