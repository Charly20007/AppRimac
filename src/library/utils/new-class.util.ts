export class setNewClass {

    private classes: string[] = [];

    /**
     * 
     * @param className nombre de la clase css que desea agregar a la etiqueta
     * @description permite ir almacenando en un array las clases que se van ir
     * agregando.
    */
    public setClass(className: string): this {
        if (className.trim().length > 0) this.classes.push(className.trim())
        return this;
    }

    /**
     * 
     * @param className nombre de la clase css que desea agregar a la etiqueta
     * @param is esta variable va a permitir si la clase se agrega al array, solo si
     * tiene un valor verdadero [true]. 
    */
    public setClassIsValid(className: string, is?: boolean): this {
        if (className.trim().length > 0 && is) this.classes.push(className.trim())
        return this;
    }

    /**
     * 
     * @returns Las clases obtenidas desde el array en una cadena de texto, cada una separada por un espacio.
    */
    getClass(): string {
        return this.classes.join(" ");
    }
}


export const classNames = (...classes: string[]) => {
    classes = classes.filter(res => res.trim().length > 0);
    return classes.join(" ");
}