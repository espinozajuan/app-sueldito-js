const ingresos = [
    new Ingreso('Sueldo', 60000.00),
    new Ingreso ('Trabajos Freelance', 30000.00)
];

const egresos = [
    new Egreso ('Pago Alquiler', 15000.00),
    new Egreso ('Gastos de comida', 8000.00)
];

let cargarApp = ()=>{
    cargarCabecero();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for (let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for (let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor)=>{
   return valor.toLocaleString('es-AR', {style:'currency', currency:'ARS', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('es-AR', {style:'percent', minimumFractionDigits:2})
}