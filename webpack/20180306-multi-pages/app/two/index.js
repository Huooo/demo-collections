// === plugin ============================================
import axios from 'axios';

// === modules ===========================================
import './index.css';

// === index ==============================================
console.log('========== This is a demo. =========='); 

axios({
    method: 'get',
    url: '/api/GET/Temporary/201802071533'
})
.then( ( response ) => {
    console.log('=== success-post-process ===');
    console.log(response);
})
.catch( ( error ) => {
    console.log('=== error-post-process ===');
});