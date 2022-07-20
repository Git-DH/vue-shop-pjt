import axios from 'axios';

export default {
    methods: {
        async $post(url, param) {
            return (await axios({
                method: 'post',
                url,
                data: param
            }).catch(e => {
                console.error(e);
            })).data;
        },

        async $get(url, param) {
                // 문자열, 객체
            return (await axios.get(url, {
                params: param
            }).catch(e => {
                console.error(e);
            })).data;
        },

        $base64(file) {
            return new Promise(resolve => {
                const fr = new FileReader();
                fr.onload = e => {
                    resolve(e.target.result);
                }
                fr.readAsDataURL(file); // 넘어 온 파일정보를 읽는 것
            });
        }
    }
}