import { Persona } from './persona';
import { TipoCliente } from './tipo-cliente';

export class Cliente {

   
        id: number;
        fechaReg: Date;
        estado: string;
        password: string;
        tipoC: string;
        idPersona: number;
        idTipoC: number;
        idGrupo: number;
        idEmpresa: number;
        persona:Persona;
        tipoCliente:TipoCliente;
}
