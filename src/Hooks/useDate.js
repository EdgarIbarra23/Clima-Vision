export const useDate = () => {
    const date = new Date()

    // Obtener el Pais de Origen
    const opciones = { timeZoneName: 'long' };
    const infoPais = new Intl.DateTimeFormat(undefined, opciones).formatToParts(date)
    .find(part => part.type === 'timeZoneName')
    .value;
    const soloPais = infoPais.split(' ').slice(-1).join(' ');

    return {
        soloPais
    }
}
