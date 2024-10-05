import { SortedListOfImmutables } from '../sortedlistofimmutables.model';
import { Food } from './food.model';

describe('Eliminar Elementos', () => {
  let sortedList: SortedListOfImmutables;

  beforeEach(() => {
    sortedList = new SortedListOfImmutables();
  });

  // Prueba 1
  it('1. Debería eliminar un elemento existente de la lista', () => {
    // Objetivo: Verificar que un elemento pueda ser eliminado de la lista.
    // Datos de prueba: Frijoles (costo: 1900, precio: 4500, imagen: frijoles.png), 
    // Huevo (costo: 1000, precio: 2500, imagen: huevo.png), 
    // Keffir (costo: 2500, precio: 5000, imagen: Keffir.png).
    sortedList.add(new Food("Frijoles", 1900, 4500, "frijoles.png"));
    sortedList.add(new Food("Huevo", 1000, 2500, "huevo.png"));
    sortedList.add(new Food("Keffir", 2500, 5000, "Keffir.png"));

    sortedList.remove(new Food("Frijoles", 1900, 4500, "frijoles.png")); 

    // Resultado esperado: El tamaño de la lista debe ser 2 después de eliminar Frijoles.
    expect(sortedList.getSize()).toBe(2);
  });

  // Prueba 2
  it('2. Debería verificar disponibilidad después de eliminar un elemento', () => {
    // Objetivo: Verificar que la disponibilidad de los alimentos se actualice correctamente después de eliminar un elemento.
    // Datos de prueba: Frijoles, Huevo y Keffir (con los mismos datos que en la prueba anterior).
    sortedList.add(new Food("Frijoles", 1900, 4500, "frijoles.png"));
    sortedList.add(new Food("Huevo", 1000, 2500, "huevo.png"));
    sortedList.add(new Food("Keffir", 2500, 5000, "Keffir.png"));

    sortedList.remove(new Food("Frijoles", 1900, 4500, "frijoles.png")); 

    const foodList = new SortedListOfImmutables();
    foodList.add(new Food("Huevo", 1000, 2500, "huevo.png")); 
    foodList.add(new Food("Keffir", 2500, 5000, "Keffir.png")); 

    // Resultado esperado: La disponibilidad de Huevo y Keffir debe ser verdadera, 
    // mientras que Frijoles debe ser falsa.
    expect(sortedList.checkAvailabilityToList(foodList)).toBe(true);
    const checkFrijoles = new SortedListOfImmutables();
    checkFrijoles.add(new Food("Frijoles", 1900, 4500, "frijoles.png"));
    expect(sortedList.checkAvailabilityToList(checkFrijoles)).toBe(false);
  });
});

describe('Agregar elementos', () => {
  let sortedList: SortedListOfImmutables;

  beforeEach(() => {
    sortedList = new SortedListOfImmutables();
  });

  // Prueba 3
  it('3. Debería agregar el elemento a una lista vacía', () => {
    // Objetivo: Verificar que un nuevo elemento se pueda agregar a una lista vacía.
    // Datos de prueba: Frijoles (costo: 2800, precio: 5200, imagen: frijoles.png).
    const food = new Food("Frijoles", 2800, 5200, "frijoles.png");
    sortedList.add(food); 

    // Resultado esperado: El primer elemento de la lista debe ser Frijoles.
    expect(sortedList.get(0).getName()).toBe('Frijoles');
  });

  // Prueba 4
  it('4. Debería calcular el costo mayorista total después de agregar elementos', () => {
    // Objetivo: Verificar que el costo mayorista total se calcule correctamente.
    // Datos de prueba: Frijoles (costo: 1900), Huevo (costo: 1000), Keffir (costo: 2500).
    sortedList.add(new Food("Frijoles", 1900, 4500, "frijoles.png"));
    sortedList.add(new Food("Huevo", 1000, 2500, "huevo.png"));
    sortedList.add(new Food("Keffir", 2500, 5000, "Keffir.png"));

    // Resultado esperado: El costo mayorista total debe ser 5400 (1900 + 1000 + 2500).
    expect(sortedList.getWholesaleCost()).toBe(5400);
  });
});
