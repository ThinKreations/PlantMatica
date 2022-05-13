export const horario = () => {

    let horario = [ 'Cerrado' ];
    for (let i = 0; i < 25; i++) {
        let hora = '';
        if (i <= 9) {
            hora = `0${i}:00`;
            horario.push(hora);
        } else  {
            hora = `${i}:00`;
            horario.push(hora);
        }
    }
    return horario;

}