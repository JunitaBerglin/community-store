import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Community Store API",
            version: "1.0.0",
            description: "API documentation for the Community Store project",
        },
        servers: [
            {
                url: "http://localhost:5000", // Update to your server URL
            },
        ],
    },
    apis: ["./backend/**/*.js"], // Files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
