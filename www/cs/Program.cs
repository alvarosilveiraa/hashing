using System;

namespace Hashing
{
  class Program
  {
    static void Main(string[] args)
    {
      try {
        string exec = args[0];
        Storage storage = new Storage(100, args[1]);
        if(exec == "--insert")
        {
          storage.insert(new Vehicle(args[2], args[3], Convert.ToInt32(args[4])));
        }
        else if(exec == "--one")
        {
          storage.consoleOne(args[2]);
        }
        else if(exec == "--all")
        {
          storage.consoleAll();
        }
      }catch
      {
        Console.WriteLine("Error");
      }
    }
  }
}
