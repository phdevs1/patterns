// 1. Interfaces de Vehicle y Engine
interface Vehicle {
  assemble(): void;
}

interface Engine {
  start(): void;
}

// 2. Clases Concretas de Productos

class ElectricCar implements Vehicle {
  assemble(): void {
    console.log('Ensamblando un auto %celéctrico');
  }
}

class GasCar implements Vehicle {
  assemble(): void {
    console.log('Ensamblando un auto de %ccombustión');
  }
}

class ElectricEngine implements Engine {
  start(): void {
    console.log('Arrancando motor %celéctrico');
  }
}

class GasEngine implements Engine {
  start(): void {
    console.log('Arrancando motor de %ccombustión');
  }
}

// 3. Interfaz de la Fábrica Abstracta

interface VehicleFactory {
  createVehicle(): Vehicle;
  createEngine(): Engine;
}

// 4. Clases Concretas de Fábricas
class ElectricVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new ElectricCar();
  }

  createEngine(): Engine {
    return new ElectricEngine();
  }
}

class GasVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new GasCar();
  }
  createEngine(): Engine {
    return new GasEngine();
  }
  // Implementación de los métodos createVehicle y createEngine
}

// 5. Código Cliente

function mainCar(factory: VehicleFactory) {
  const vehicle = factory.createVehicle();
  const engine = factory.createEngine();

  vehicle.assemble();
  engine.start();
}

// Pruebas
console.log('Creando vehículo eléctrico:');
mainCar(new ElectricVehicleFactory());

console.log('\nCreando vehículo de combustión:');
mainCar(new GasVehicleFactory());