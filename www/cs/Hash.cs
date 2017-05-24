using System;

namespace Hashing
{
  class Hash
  {
    private int max;
    public Hash(int max)
    {
      this.max = max;
    }

    public int getIndex(string plaque)
    {
      string[] parse = plaque.Split('-');
      int a = this.getCharNumber(parse[0][0]);
      int b = this.getCharNumber(parse[0][1]);
      int c = this.getCharNumber(parse[0][2]);

      int val = Convert.ToInt32(parse[1]);

      return a * b * c * val % this.max;
    }

    private int getCharNumber(char c)
    {
      return (int)c - 55;
    }
  }
}
