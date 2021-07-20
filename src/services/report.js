import AsyncStorage from '@react-native-async-storage/async-storage';
import request from './request';

const commitReport = async (report) => {
    try {
        const key = "@reports";

        remove(key, report.id).then(() => {
            const list = await AsyncStorage.getItem(key);
            let reports = JSON.parse(list);
            AsyncStorage.removeItem(key);
            report.commited = true;
            reports.push(report);
            AsyncStorage.setItem(key, JSON.stringify(reports));

            return request.post('/report', report);
        });
    } catch (e) {
        return false;
    }
}

const addReport = async (report) => {
    try {
        const list = await AsyncStorage.getItem("@reports");
        let reports = [];
        let max = 0;
        
        if (list) {
            reports = JSON.parse(list);
            AsyncStorage.removeItem('@reports');
            let last = reports[reports.length - 1];
            max = last.id;
        }

        const items = await AsyncStorage.getItem("@report-items");
        let itemList = [];

        if (items) {
            itemList = JSON.parse(items);
            AsyncStorage.removeItem('@report-items');
        }
    
        report.id = max++;
        report.items = itemList;
        reports.push(report);
        AsyncStorage.setItem('@reports', JSON.stringify(reports));
    
        return true;
    } catch (e) {
        return false;
    }
}

const editReport = async (report) => {
    try {
        const key = "@reports";
        const itemKey = "@report-items";
        let items = [];

        remove(key, report.id).then(() => {
            const reportList = await AsyncStorage.getItem(key);
            let reports = JSON.parse(reportList);
            AsyncStorage.removeItem(key);

            const itemList = await AsyncStorage.getItem(itemKey);

            if (itemList) {
                items = JSON.parse(itemList);
                AsyncStorage.removeItem(itemKey);
            }

            report.items = items;
            reports.push(report);
            AsyncStorage.setItem(key, JSON.stringify(reports));

            return true;
        });
    } catch (e) {
        return false;
    }
}

const addItem = async (item) => {
    try {
        const items = await AsyncStorage.getItem("@report-items");
        let itemList = [];
        let max = 0;

        if (items) {
            itemList = JSON.parse(items);
            AsyncStorage.removeItem('@report-items');
            let last = itemList[itemList.length - 1];
            max = last.id;
        }

        item.id = max++;
        itemList.push(item);
        AsyncStorage.setItem('@report-items', JSON.stringify(itemList));
    
        return true;
    } catch (e) {
        return false;
    }
}

const editItem = async (item) => {
    try {
        const key = "@report-items";

        remove(key, item.id).then(() => {
            const items = await AsyncStorage.getItem(key);
            let itemList = JSON.parse(items);
            AsyncStorage.removeItem(key);
            itemList.push(item);
            AsyncStorage.setItem(key, JSON.stringify(itemList));

            return true;
        });
    } catch (e) {
        return false;
    }
}

const remove = async (key, id) => {
    try {
        const list = await AsyncStorage.getItem(key);
    
        if (list) {
            let items = JSON.parse(list);
            AsyncStorage.removeItem(key);

            items = items.filter((item) => {
                if (item.id === id) {
                    return false;
                }
                
                return true;
            });

            AsyncStorage.setItem(key, JSON.stringify(items));

            return true;
        }
    } catch (e) {
        return false;
    }
}

export {
    commitReport,
    addReport,
    editReport,
    addItem,
    editItem,
    remove,
}