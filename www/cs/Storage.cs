using System;
using System.Collections.Generic;
using System.IO;

namespace Hashing
{
    class Storage
    {
        private int max;
        private string path;
        private List<Vehicle>[] data;
        private Hash hash;

        public Storage(int max, string path)
        {
            this.max = max;
            this.path = path;
            this.data = new List<Vehicle>[max];
            this.hash = new Hash(max);
            this.setStorage();
        }

        public void insert(Vehicle vehicle)
        {
            int index = this.hash.getIndex(vehicle.getPlate());
            if(this.data[index] == null)
                this.data[index] = new List<Vehicle>();

            this.data[index].Add(vehicle);

            StreamWriter sw = File.AppendText(this.path);
            sw.WriteLine(vehicle.getPlate() + ',' + vehicle.getModel() + ',' + vehicle.getYear());
            sw.Close();
            Console.WriteLine("Veiculo inserido na vaga: " + index);
        }

        public void consoleOne(string plate)
        {
            int index = this.hash.getIndex(plate);
            if(this.data[index] != null)
            {
                for (int i = 0; i < this.data[index].Count; i++)
                {
                    if (this.data[index][i].getPlate() == plate)
                    {
                        Console.WriteLine(index);
                        Console.WriteLine(i);
                        Vehicle vehicle = this.data[index][i];
                        Console.WriteLine(vehicle.getPlate());
                        Console.WriteLine(vehicle.getModel());
                        Console.WriteLine(Convert.ToInt32(vehicle.getYear()));
                    }
                }
            }
        }

        public void consoleAll()
        {
            if(this.data.Length > 0)
            {
                for(int i = 0; i < this.data.Length; i++)
                {
                    if(this.data[i] != null)
                    {
                        for(int j = 0; j < this.data[i].Count; j++)
                        {
                            Vehicle vehicle = this.data[i][j];
                            Console.WriteLine(Convert.ToString(i) + ',' + vehicle.getPlate() + ',' + vehicle.getModel() + ',' + vehicle.getYear());
                        }
                    }
                }
            }
        }

        private void setStorage()
        {
            string line;
            StreamReader storage = new StreamReader(this.path);
            while((line = storage.ReadLine()) != null)
            {
                string[] data = line.Split(',');
                int index = this.hash.getIndex(data[0]);
                if(this.data[index] == null)
                    this.data[index] = new List<Vehicle>();

                this.data[index].Add(new Vehicle(data[0], data[1], Convert.ToInt32(data[2])));
            }
            storage.Close();
        }

    }
}
