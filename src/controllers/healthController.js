import { HealthModel } from '../models/healthModel.js';

export class HealthController {
    static checkHealth(req, res) {
        const healthStatus = HealthModel.getStatus();
        return res.status(200).json(healthStatus);
    }
}