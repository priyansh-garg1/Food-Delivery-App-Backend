import express, {Request,Response,NextFunction} from 'express'
import { CreateVendor, GetVendorById, GetVendors } from '../controllers';

const router = express.Router();

router.post('/vendor', CreateVendor);

router.get('/vendor', GetVendors);

router.get('/vendor/:id', GetVendorById);

export {router as AdminRoute} 