import { Restaurant } from './restaurant.model';
import { SortedListOfImmutables } from './sortedlistofimmutables.model';
import { Food } from './food.model';

describe('Restaurant', () => {
    let restaurant: Restaurant;
    let inventory: SortedListOfImmutables;

    beforeEach(() => {
        restaurant = new Restaurant("El Buen Sabor", 5000);
        inventory = new SortedListOfImmutables();
    });

    // Prueba 1
    it('1. Debería agregar alimentos al inventario si hay suficiente efectivo', () => {
        // Objetivo: Verificar que se pueden agregar alimentos al inventario cuando hay suficiente efectivo disponible.
        // Datos de prueba: 
        // - Arroz (costo mayorista: 1000, precio: 2000, imagen: arroz.png)
        // - Frijoles (costo mayorista: 1500, precio: 3000, imagen: frijoles.png)
        const foodList = new SortedListOfImmutables();
        foodList.add(new Food("Arroz", 1000, 2000, "arroz.png"));
        foodList.add(new Food("Frijoles", 1500, 3000, "frijoles.png"));

        // Resultado esperado: 
        // - La adición debe ser exitosa (true)
        // - Efectivo restante: 5000 - 2500 = 2500
        // - El tamaño del inventario debe ser 2
        expect(restaurant.addShipmentToInventory(foodList)).toBe(true);
        expect(restaurant.getCash()).toBe(5000 - 2500);
        expect(restaurant.getInventory().getSize()).toBe(2);
    });
});
