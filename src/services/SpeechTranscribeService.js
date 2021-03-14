import axios from 'axios'

const TRANSCRIBE_REST_API_URL = 'http://localhost:8080/speech/transcribe';
const SEARCH_REST_API_URL = 'http://localhost:8080/speech/search';


class SpeechTranscribeService {

    getTranscription(){
        return axios.get(TRANSCRIBE_REST_API_URL);
    }
    getSearchTranscription(){
        return axios.post(SEARCH_REST_API_URL,searchRecord);
    }
}

export default new SpeechTranscribeService();
