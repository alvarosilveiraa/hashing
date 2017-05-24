using System;

namespace Hashing
{
  class Vehicle
  {
    private string plate;
    private string model;
    private int year;

    public Vehicle(string plate, string model, int year)
    {
      this.plate = plate;
      this.model = model;
      this.year = year;
    }

    public string getPlate()
    {
      return this.plate;
    }

    public string getModel()
    {
      return this.model;
    }

    public int getYear()
    {
      return this.year;
    }
  }
}
