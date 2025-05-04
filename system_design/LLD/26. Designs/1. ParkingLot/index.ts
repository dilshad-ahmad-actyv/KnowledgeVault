enum VehicleType {
  CAR = "Car",
  BIKE = "Bike",
  TRUCK = "Truck",
}

enum Status {
  BOOKED = "Booked",
  AVAILABLE = "Available",
  OCCUPIED = "Occupied",
  LEFT = "Left",
  UNDER_MAINTENANCE = "Under Maintenance",
}

class Vehicle {
  constructor(public number: string, public type: VehicleType) {}
}

class Slot {
  constructor(
    public slotNo: string,
    public vehicleType: VehicleType,
    public status: Status
  ) {}

  isAvailable() {
    return this.status === Status.AVAILABLE;
  }
  park(vehicle: Vehicle) {
    if (!this.isAvailable()) throw new Error("Slot not available");
    this.status = Status.OCCUPIED;
  }

  unpark() {
    if (this.status !== Status.OCCUPIED) throw new Error("Slot not occupied");
    this.status = Status.AVAILABLE;
  }
}

class ParkingLot {
  constructor(
    public vehicleType: VehicleType,
    public slots: Slot[],
    public status: Status
  ) {}
}

class Ticket {
  constructor(
    public vehicle: Vehicle,
    public slotNo: string,
    public status: Status,
    public entryTime: Date = new Date(),
    public exitTime: Date | null = null
  ) {}
}

class BillPayment {
  price = {
    [VehicleType.CAR]: 30,
    [VehicleType.BIKE]: 5,
    [VehicleType.TRUCK]: 50,
  };
  constructor(public ticket: Ticket) {}

  calculateBill() {
    const rate = this.price[this.ticket.vehicle.type];
    const now = new Date();
    const entryTime = new Date(this.ticket.entryTime);
    const hours = Math.ceil(
      (now.getTime() - entryTime.getTime()) / (1000 * 60 * 60)
    ); // convert ms to hrs
    return rate * hours;
  }
}

class ParkingManager {
  constructor(public parkingLot: ParkingLot) {}

  parkVehicle(vehicle: Vehicle): Ticket | null {
    const availableSlot = this.parkingLot.slots.find(
      (slot) => slot.isAvailable() && slot.vehicleType === vehicle.type
    );

    if (!availableSlot) {
      console.log("No slot available");
      return null;
    }

    availableSlot.park(vehicle);
    return new Ticket(vehicle, availableSlot.slotNo, Status.BOOKED);
  }

  unparkVehicle(ticket: Ticket): number {
    const slot = this.parkingLot.slots.find((s) => s.slotNo === ticket.slotNo);
    if (!slot) throw new Error("Invalid slot");

    slot.unpark();
    ticket.exitTime = new Date();
    ticket.status = Status.LEFT;

    const payment = new BillPayment(ticket);
    return payment.calculateBill();
  }
}

const car = new Vehicle("KA-01-1234", VehicleType.CAR);
const slots = [
  new Slot("C1", VehicleType.CAR, Status.AVAILABLE),
  new Slot("C2", VehicleType.CAR, Status.AVAILABLE),
];

const lot = new ParkingLot(VehicleType.CAR, slots, Status.AVAILABLE);
const manager = new ParkingManager(lot);

const ticket = manager.parkVehicle(car);
console.log("Ticket Issued", ticket);

setTimeout(() => {
  const bill = manager.unparkVehicle(ticket!);
  console.log("Bill Amount", bill);
  console.log("Ticket Released", ticket);
}, 1000 * 30); // simulate 1 hour parking
