package com.hyva.restopos.util;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.File;

@Component("fileSystemOperations")
public class FileSystemOperations {
    private final Logger log = Logger.getLogger(getClass());

    private static String resourceDir;
    private static String resourceDir1;
    private static String imagesDir;
    private static String imagesDir1;
    private static String backupDir;


    @PostConstruct
    public String init() {
        if (!StringUtils.isBlank(resourceDir)) {
            File file = new File(resourceDir + File.separator + "ANTHYESTI" + File.separator);
            file.mkdir();
        } else {
            resourceDir = System.getProperty("user.dir") + File.separator + "ANTHYESTI" + File.separator;
            File file = new File(resourceDir);
            if (!file.exists()) {
                file.mkdir();
            }

        }
        if (!StringUtils.isBlank(resourceDir1)) {
            File file = new File(resourceDir1 + File.separator + "ANTHYESTI" + File.separator);
            file.mkdir();
        } else {
            resourceDir1 = System.getProperty("user.dir") + File.separator + "ANTHYESTI" + File.separator;
            File file = new File(resourceDir1);
            if (!file.exists()) {
                file.mkdir();
            }

        }
        log.info("resourceDir = " + resourceDir);
        log.info("resourceDir1 = " + resourceDir1);
        File file = new File(resourceDir + File.separator + "image" + File.separator);
        File file1 = new File(resourceDir1 + File.separator + "Qr" + File.separator);
        if (!file.exists()) {
            file.mkdir();
        }
        if (!file1.exists()) {
            file1.mkdir();
        }
        imagesDir = file.getAbsolutePath();
        imagesDir1 = file1.getAbsolutePath();
        return resourceDir;
    }
    public static String getImagesDirItem() {
        File file=new File(imagesDir + File.separator + TenantContext.getCurrentTenant() + File.separator);
        file.mkdir();
        return imagesDir + File.separator + TenantContext.getCurrentTenant() + File.separator;
    }
    public static String getImagesDirQr() {
        File file1=new File(imagesDir1 + File.separator + TenantContext.getCurrentTenant() + File.separator);
        file1.mkdir();
        return imagesDir1 + File.separator + TenantContext.getCurrentTenant() + File.separator;
    }

    public static String getBackupDir() {
        return backupDir;
    }

    public static String getImagesDirWithoutTenant() {
        return imagesDir;
    }
    public static String getImagesDirQRWithoutTenant() {
        return imagesDir1;
    }

    @Value("${file.system.dir}")
    public void setResourceDir(String resourceDir) {
        FileSystemOperations.resourceDir = resourceDir;
    }

    @Value("${file.system.dir1}")
    public void setResourceDir1(String resourceDir1) {
        FileSystemOperations.resourceDir1 = resourceDir1;
    }


}
