const createServer = require('./createServer');
const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4); // a - b
      expect(spySubtract).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /multiple', () => {
    it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(80); // a * b
      expect(spySubtract).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is division result of a and b correctly', async () => {
      // Arrange
      const a = 16;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });
      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });
      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(2); // a / b
      expect(spySubtract).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is result of rectangle perimeter with given length and width', async () => {
      // Arrange
      const length = 16;
      const width = 8;
      const figureCalculator = new FigureCalculator(MathBasic);
      const server = createServer({ mathBasic: MathBasic });

      const result = figureCalculator.calculateRectanglePerimeter(length, width);

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(result);
    });
  });

  describe('when GET /rectangle/area', () => {
    it('should respond with a status code of 200 and the payload value is result of rectangle area with given length and width', async () => {
      // Arrange
      const length = 16;
      const width = 8;
      const figureCalculator = new FigureCalculator(MathBasic);
      const server = createServer({ mathBasic: MathBasic });

      const result = figureCalculator.calculateRectangleArea(length, width);

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(result);
    });
  });

  describe('when GET /triangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is result of rectangle perimeter with given length and width', async () => {
      // Arrange
      const sideA = 16;
      const sideB = 8;
      const base = 20;
      const figureCalculator = new FigureCalculator(MathBasic);
      const server = createServer({ mathBasic: MathBasic });

      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(result);
    });
  });

  describe('when GET /triangle/area', () => {
    it('should respond with a status code of 200 and the payload value is result of rectangle area with given length and width', async () => {
      // Arrange
      const base = 20;
      const height = 5;
      const figureCalculator = new FigureCalculator(MathBasic);
      const server = createServer({ mathBasic: MathBasic });

      const result = figureCalculator.calculateTriangleArea(base, height);

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(result);
    });
  });
});
