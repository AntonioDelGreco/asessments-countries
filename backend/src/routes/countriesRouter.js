import { Router } from 'express';
import { allCountries, getInfoCountries } from '../controllers/countryController.js';

const router = Router();

router.get('/', allCountries);
router.get('/info/:pid', getInfoCountries);

export default router;