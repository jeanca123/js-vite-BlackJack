/**
 * 
 * @param {Array<String>} pedirCarta 
 * @param {Array<String>} Retorna una nueva carta
 */

// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}