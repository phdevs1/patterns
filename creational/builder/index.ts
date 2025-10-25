class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;


    displayConfiguration(){
        console.log(` Configuracion de la computadora
            CPU: ${this.cpu}
            RAM: ${this.ram}
            Almacenamiento: ${this.storage}
            GPU: ${this.gpu ?? 'no definida'}
        `)
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor(){
        this.computer = new Computer()
    }

    setCPU(cpu: string): ComputerBuilder{
        this.computer.cpu = cpu;
        return this
    }
    setRAM(ram: string): ComputerBuilder{
        this.computer.ram = ram;
        return this
    }
    setStorage(storage: string): ComputerBuilder{
        this.computer.storage = storage;
        return this
    }
    setGPU(gpu: string): ComputerBuilder{
        this.computer.gpu = gpu;
        return this
    }

    build(): Computer{
        return this.computer
    }
}

function main(){
    const basicComputer = new ComputerBuilder()
        .setCPU('Intel i5')
        .setRAM('5GB')
        .setStorage('265GB')
        .build()
    
        basicComputer.displayConfiguration()

    const gamerComputer = new ComputerBuilder()
      
        .setGPU('NVIDIA RTX 4090')
        .build()
    
        gamerComputer.displayConfiguration()
}

main()